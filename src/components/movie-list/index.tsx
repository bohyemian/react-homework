import { useEffect, useRef, useState } from "react";
import { deleteQueryParam, getQueryParam } from "@/utils/url-view";
import { dataFetch } from "@/utils/dataFetch";
import { tm } from "@/utils/tm-merge";
import { type DailyBoxOfficeList, MovieInfo, MovieInfoResult } from "@/types/movie";
import MovieItem from "./movie-item";
import SearchForm from "./input-form";
import Loading from "./loading";
import { getStorage, setStorage } from "@/utils/localStorage";

const VITE_KEY = import.meta.env.VITE_KEY;
const moveURL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/';
const boxoffice = moveURL + `boxoffice/searchDailyBoxOfficeList.json?key=${VITE_KEY}`;
const movieInfo = moveURL + `movie/searchMovieInfo.json?key=${VITE_KEY}`;
const date = new Date();
const yesterdayKR = (new Date(date.setDate(date.getDate() - 1))).toLocaleDateString("ko-KR", {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
});
const yesterday = (new Date(date.setDate(date.getDate() - 1))).toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).replace(/\. /g, "").replace(/\./g, "");

const getQuery = () => getQueryParam('movie');

function List() {
  const dailyBoxOfficeList = useRef<DailyBoxOfficeList[]>([]);
  const [movieListDetail, setMovieListDetail] = useState<null | MovieInfo[]>(null);
  const [error, setError] =  useState<null | Error>(null);
  const [query, setQuery] = useState<string | null>(getQuery);
  const [errorMessange, setErrorMessange] = useState<string | null>(null);
  const words = query?.split(' ').filter(Boolean).map((word) => word.toLowerCase().trim());

  const filteredList = query ? movieListDetail?.filter(movie => {
    return words?.some(word => (
      movie.movieNm.includes(word) ||
      movie.actors.some(actor => actor.peopleNm.includes(word)) ||
      movie.directors.some(director => director.peopleNm.includes(word))
    ));
  }) : movieListDetail;

  const filtereddailyBoxOfficeList = query ? dailyBoxOfficeList.current?.filter(movie => filteredList?.some(({movieCd}) => movie.movieCd === movieCd)) : dailyBoxOfficeList.current;

  useEffect(() => {
    const STORAGE_KEY_DAILYBOXOFFICE = 'dailyBoxOffice';
    const STORAGE_KEY_MOVIE_DETAIL_LIST = 'moveDetailList';
    const dailyBoxOfficeStorage = getStorage(STORAGE_KEY_DAILYBOXOFFICE);
    const movieListStorage = getStorage(STORAGE_KEY_MOVIE_DETAIL_LIST) as MovieInfo[] | null;

    if (dailyBoxOfficeStorage) {
      dailyBoxOfficeList.current = dailyBoxOfficeStorage;
      setMovieListDetail(movieListStorage);
    } else {
      dataFetch(`${boxoffice}&targetDt=${yesterday}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.faultInfo) {
            return setErrorMessange(data.faultInfo.message);
          }

          dailyBoxOfficeList.current = data.boxOfficeResult.dailyBoxOfficeList as DailyBoxOfficeList[];
          setStorage(STORAGE_KEY_DAILYBOXOFFICE, dailyBoxOfficeList.current);

          Promise.all(dailyBoxOfficeList.current?.map(({movieCd}) => fetch(`${movieInfo}&movieCd=${movieCd}`)))
            .then(response => Promise.all(response.map(item => item.json())))
            .then((movie: MovieInfoResult[]) => {
              const movieList = movie.map(item => item.movieInfoResult.movieInfo);

              setMovieListDetail(movieList);
              setStorage(STORAGE_KEY_MOVIE_DETAIL_LIST, movieList);
            })
            .catch((error) => console.error(error));

            setError(null);
          })
        .catch((error) => {
          setError(error as Error);
          setMovieListDetail(null);
        });
    }

    const handlePopState = () => {
      setQuery(getQuery);
    };

    globalThis.addEventListener('popstate', handlePopState);

    return () => {
      deleteQueryParam('movie');
      globalThis.removeEventListener('popstate', handlePopState);
    }
  }, []);

  return (
    <div className="wrap box-office">
      <h1 className="sr-only">카드 검색 리스트 UI 구현</h1>
      <hgroup className="flex flex-col items-center justify-center gap-y-5 pb-15">
        <h2 className="text-[60px] font-[Ownglyph_wiseelist-Rg] font-black text-[var(--vivid-white)]">일별 박스오피스</h2>
        <p className="text-4xl font-bold tracking-[-0.05em]">{yesterdayKR} (어제 날짜 기준)</p>
      </hgroup>

      {movieListDetail ? <SearchForm query={query} setQuery={setQuery} /> : null}
      <ul hidden={!movieListDetail} className={tm("grid justify-center gap-y-15 mt-30 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5")}>
        {filtereddailyBoxOfficeList?.map(({movieCd, ...restProps}, i) => (
          <li key={movieCd}>
            <MovieItem key={movieCd} dailyBoxOffice={restProps} movieDetail={filteredList[i]} />
          </li>
        ))}
      </ul>

      {error ? <div className="flex justify-center py-50">에러!</div> : null}
      {errorMessange
        ? <div className="flex flex-col items-center gap-y-4 py-60 text-[24px]">
            <svg aria-hidden="true" className="animate-bounce" width={52} height={52} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18.562v-6.518C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2-.835-.42-2.223-.52-3 0-.874.585-2.126.585-3 0-.885-.593-1.649-.57-2.5 0-.874.585-2.126.585-3 0-.777-.52-1.665-.42-2.5 0-1.033.519-2-.838-2-2M9 15.5h6m-5-5.25H9m6 0h-1" />
            </svg>
            {errorMessange}😑
          </div>
        : null}
      {!movieListDetail && !errorMessange? <Loading /> : null}
    </div>
  )
}
export default List;