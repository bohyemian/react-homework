import { useEffect, useRef, useState } from "react";
import { dataFetch } from "@/utils/dataFetch";
import { tm } from "@/utils/tm-merge";
import { type DailyBoxOfficeList, MovieInfo } from "@/types/movie";
import MovieItem from "./movie-item";
import Loading from "./loading";
import SearchForm from "./input-form";

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

function List() {
  const dailyBoxOfficeList = useRef<null | DailyBoxOfficeList[]>(null);
  const [movieListDetail, setMovieListDetail] = useState<null | MovieInfo[]>(null);
  const [error, setError] =  useState<null | Error>(null);

  useEffect(() => {
    dataFetch(`${boxoffice}&targetDt=${yesterday}`)
      .then((response) => response.json())
      .then((data) => {
        dailyBoxOfficeList.current = data.boxOfficeResult.dailyBoxOfficeList as DailyBoxOfficeList;

        const moveDetail = dailyBoxOfficeList.current?.map(({movieCd}) => {
          return fetch(`${movieInfo}&movieCd=${movieCd}`);
        });

        Promise.all(moveDetail)
          .then(response => Promise.all(response.map(item => item.json())))
          .then(movie => {
            setMovieListDetail(movie.map(item => item.movieInfoResult.movieInfo));
          })
          .catch((error) => console.error(error));

          setError(null);
        })
        .catch((error) => {
          setError(error as Error);
          setMovieListDetail(null);
        });
  }, []);

  return (
    <div className="wrap box-office">
      <h1 className="sr-only">카드 검색 리스트 UI 구현</h1>
      <hgroup className="flex flex-col items-center justify-center gap-y-5 pb-15">
        <h2 className="text-[60px] font-[Ownglyph_wiseelist-Rg] font-black text-[var(--vivid-white)]">일별 박스오피스</h2>
        <p className="text-4xl font-bold tracking-[-0.05em]">{yesterdayKR} (어제 날짜 기준)</p>
      </hgroup>

      <SearchForm />

      <ul aria-hidden={!movieListDetail} className={tm("grid justify-center gap-y-15 mt-30 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5")}>
        {dailyBoxOfficeList.current?.map(({movieCd,...restProps}, i) => {
          return (
            <li key={movieCd}>
              <MovieItem key={movieCd} dailyBoxOffice={restProps} movieDetail={movieListDetail[i]} />
            </li>
          )
        })}
      </ul>

      {error ? '에러' : null}
      {!movieListDetail ? <Loading /> : null}
    </div>
  )
}
export default List;