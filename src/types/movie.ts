export interface ResponseData {
  boxOfficeResult: BoxOfficeResult;
}

export interface BoxOfficeResult {
  boxofficeType:      string;
  showRange:          string;
  dailyBoxOfficeList: DailyBoxOfficeList[];
}

export interface DailyBoxOfficeList {
  rnum:          string;
  rank:          string;
  rankInten:     string;
  rankOldAndNew: RankOldAndNew;
  movieCd:       string;
  movieNm:       string;
  openDt:        Date;
  salesAmt:      string;
  salesShare:    string;
  salesInten:    string;
  salesChange:   string;
  salesAcc:      string;
  audiCnt:       string;
  audiInten:     string;
  audiChange:    string;
  audiAcc:       string;
  scrnCnt:       string;
  showCnt:       string;
}

export enum RankOldAndNew {
  Old = "OLD",
}

export interface MovieInfoMain {
  movieInfoResult: MovieInfoResult;
}

export interface MovieInfoResult {
  movieInfo: MovieInfo;
  source:    string;
}

export interface MovieInfoProps {
  query: string | null;
  dailyBoxOffice: Partial<DailyBoxOfficeList>;
  movieDetail: MovieInfo
}

export interface MovieInfo {
  movieCd:    string;
  movieNm:    string;
  movieNmEn:  string;
  movieNmOg:  string;
  showTm:     string;
  prdtYear:   string;
  openDt:     string;
  prdtStatNm: string;
  typeNm:     string;
  nations:    Nation[];
  genres:     Genre[];
  directors:  Director[];
  actors:     Actor[];
  showTypes:  ShowType[];
  companys:   Company[];
  audits:     Audit[];
  staffs:     unknown[];
}

export interface Actor {
  peopleNm:   string;
  peopleNmEn: string;
  cast:       string;
  castEn:     string;
}

export interface Audit {
  auditNo:      string;
  watchGradeNm: string;
}

export interface Company {
  companyCd:     string;
  companyNm:     string;
  companyNmEn:   string;
  companyPartNm: string;
}

export interface Director {
  peopleNm:   string;
  peopleNmEn: string;
}

export interface Genre {
  genreNm: string;
}

export interface Nation {
  nationNm: string;
}

export interface ShowType {
  showTypeGroupNm: string;
  showTypeNm:      string;
}