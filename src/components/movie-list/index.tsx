import { useEffect, useRef, useState } from "react";
import { deleteQueryParam, getQueryParam } from "@/utils/url-view";
import { dataFetch } from "@/utils/dataFetch";
import { tm } from "@/utils/tm-merge";
import { type DailyBoxOfficeList, MovieInfo, MovieInfoResult } from "@/types/movie";
import MovieItem from "./movie-item";
import SearchForm from "./input-form";
import Loading from "./loading";

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

const getQuery = () => getQueryParam('query');

function List() {
  const dailyBoxOfficeList = useRef<null | DailyBoxOfficeList[]>(null);
  const [movieListDetail, setMovieListDetail] = useState<null | MovieInfo[]>(null);
  const [error, setError] =  useState<null | Error>(null);
  const [query, setQuery] = useState(getQuery);
  const [errorMessange, setErrorMessange] = useState<string | null>(null);

  useEffect(() => {
    dataFetch(`${boxoffice}&targetDt=${yesterday}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.faultInfo) {
          setErrorMessange(data.faultInfo.message);
        }

        dailyBoxOfficeList.current = data.boxOfficeResult.dailyBoxOfficeList as DailyBoxOfficeList;

        const moveDetail = dailyBoxOfficeList.current?.map(({movieCd}) => {
          return fetch(`${movieInfo}&movieCd=${movieCd}`);
        });

        Promise.all(moveDetail)
          .then(response => Promise.all(response.map(item => item.json())))
          .then((movie: MovieInfoResult) => {
            setMovieListDetail(movie.map(item => item.movieInfoResult.movieInfo));
          })
          .catch((error) => console.error(error));

          setError(null);
        })
        .catch((error) => {
          setError(error as Error);
          setMovieListDetail(null);
        });

    return () => {
      deleteQueryParam('movie');
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
        {dailyBoxOfficeList.current?.map(({movieCd,...restProps}, i) => (
          <li key={movieCd}>
            <MovieItem key={movieCd} query={query} dailyBoxOffice={restProps} movieDetail={movieListDetail[i]} />
          </li>
        ))}
      </ul>

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