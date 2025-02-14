import { DailyBoxOfficeList } from "@/types/movie";
import { tm } from "@/utils/tm-merge";

type MovieInfoProps = Partial<DailyBoxOfficeList>

function MovieItem({dailyBoxOffice, movieDetail}: MovieInfoProps, MovieInfo) {
  const {movieNm, openDt, rank, audiAcc} = dailyBoxOffice;
  const {movieNmEn, audits, showTm, directors, genres} = movieDetail;
  const youthNotAllowed = audits[0].watchGradeNm;
  const {peopleNm} = directors[0];
  const genre = genres.map(genre => genre.genreNm).join(" | ");
  console.log(movieDetail)

  return (
    <dl>
      <div className="relative pt-24">
        <dt className="pb-5 text-3xl font-black">{movieNm}</dt>
        <dd className={
          tm(
            "absolute top-0 left-0",
            "text-[50px] font-black leading-none")
        }>{rank}위</dd>
        <dd>장르: {genre}</dd>
        <dd>감독: {peopleNm}</dd>
        <dd>상영시간: {showTm}분</dd>
        <dd>개봉일: {openDt}</dd>
        <dd>누적관객수: {Number(audiAcc).toLocaleString()}명</dd>
        <dd className={
          tm(
            {"inline-block px-2 pt-1 pb-1.5 bg-[#FF0558] text-xl text-white": youthNotAllowed === '청소년관람불가'},
            "mt-3 rounded-lg")
        }>{youthNotAllowed}</dd>
      </div>
    </dl>
  )
}
export default MovieItem;