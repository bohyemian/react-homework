import { DailyBoxOfficeList } from "@/types/movie";
import { tm } from "@/utils/tm-merge";

type MovieInfoProps = Partial<DailyBoxOfficeList>

function MovieItem({dailyBoxOffice, movieDetail}: MovieInfoProps, MovieInfo) {
  const {movieNm, openDt, rank, audiAcc} = dailyBoxOffice;
  const {movieNmEn, audits, showTm, directors} = movieDetail;
  const youthNotAllowed = audits[0].watchGradeNm;
  const {peopleNm, peopleNmEn} = directors[0];
  console.log(movieDetail)

  return (
    <dl>
      <div className="relative px-18">
        <dt className="pb-2 text-4xl font-black">
          {movieNm}
          <span className="block text-3xl">({movieNmEn})</span>
          </dt>
        <dd className={
          tm("flex items-center justify-center",
            "bg-blue-500 rounded-full",
            "absolute top-0 left-0 w-13 h-13",
            "text-xl text-white leading-none")
        }>{rank}위</dd>
        <dd className={
          tm(
            {"inline-block px-2 py-1 bg-[#bd2a2a] text-white": youthNotAllowed === '청소년관람불가'},
            "rounded-lg")
        }>{youthNotAllowed}</dd>
        <dd>감독: {peopleNm} ({peopleNmEn})</dd>
        <dd>상영시간: {showTm}분</dd>
        <dd>개봉일: {openDt}</dd>
        <dd>누적관객수: {Number(audiAcc).toLocaleString()}명</dd>
      </div>
    </dl>
  )
}
export default MovieItem;