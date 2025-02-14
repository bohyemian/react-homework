import { type DailyBoxOfficeList, MovieInfo } from "@/types/movie";
import { dataFetch } from "@/utils/dataFetch";
import { useEffect, useRef, useState } from "react";
import MovieItem from "./movie-item";

const VITE_KEY = import.meta.env.VITE_KEY;
const moveURL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/';
const boxoffice = moveURL + `boxoffice/searchDailyBoxOfficeList.json?key=${VITE_KEY}`;
const movieInfo = moveURL + `movie/searchMovieInfo.json?key=${VITE_KEY}`;
const date = new Date();
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
    <div className="wrap">
      <h1 className="sr-only">카드 검색 리스트 UI 구현</h1>
      <h2 className="pb-10 text-5xl font-bold">🎬일별 박스오피스 (어제 날짜 기준)</h2>
      <ul aria-hidden={!movieListDetail}>
        {dailyBoxOfficeList.current?.map(({movieCd,...restProps}, i) => {
          return (
            <li key={movieCd} className="[&+li]:mt-10">
              <MovieItem key={movieCd} dailyBoxOffice={restProps} movieDetail={movieListDetail[i]} />
            </li>
          )
        })}
      </ul>
      {error ? '에러' : null}
    </div>
  )
}
export default List;;