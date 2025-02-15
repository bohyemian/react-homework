import { type MovieInfoProps } from "@/types/movie";
import { tm } from "@/utils/tm-merge";

function MovieItem({dailyBoxOffice, movieDetail}: MovieInfoProps) {
  const {movieNm, rank, audiAcc} = dailyBoxOffice;
  const {audits, showTm, directors, actors, genres, openDt} = movieDetail;
  const {peopleNm} = directors[0];
  const youthNotAllowed = audits[0].watchGradeNm;
  const genre = genres.map(genre => genre.genreNm);

  return (
    <dl>
      <div className="relative pt-24">
        <dt className="pb-5 text-3xl font-black break-keep">{movieNm}</dt>
        <dd className={
          tm(
            "absolute top-0 left-0",
            "text-[50px] font-black leading-none")
        }>{rank}위</dd>
        <dd className="flex items-center gap-x-2">장르: {genre.map(j => <span key={j} className="px-2 bg-yellow-800 text-[13px]">{j}</span>)}</dd>
        <dd>감독: {peopleNm}</dd>
        <dd>배우: {actors.map(({peopleNm}, i) => i <= 1 ? <span key={peopleNm}>{peopleNm}{i === 0 ? ', ' : null}</span> : null)}</dd>
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