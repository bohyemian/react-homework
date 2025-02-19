import { tm } from "@/utils/tm-merge";
import { deleteQueryParam, setQueryParam } from "@/utils/url-view";

interface SearchFormProps {
  query: string | null;
  setQuery: React.Dispatch<React.SetStateAction<string | null>>;
}

const setQueryMovie = setQueryParam('movie');

function SearchForm({setQuery}: SearchFormProps) {
  const handleSearch = (formData: FormData) => {
    const {query: keyword} = Object.fromEntries(formData);

    if (keyword) {
      setQueryMovie(keyword as string);
    } else {
      deleteQueryParam('movie');
    }

    setQuery(keyword as string);
  }

  return (
    <form action={handleSearch} className={
      tm("flex flex-row p-0 pb-4 max-w-[480px] mx-auto",
        "border-b-3 border-gray-700",
        "bg-transparent rounded-none",
        "focus-within:border-white",
        "transition-[border]")
    }>
      <label htmlFor="searchMovie" className="sr-only">영화 검색</label>
      <input type="search" id="searchMovie" name="query" className="w-full flex-1 px-4 text-[28px] font-bold" />
      <button type="submit" aria-label="검색" title="검색" className="p-2">
        <svg width={48} height={48} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 11.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-2.107 5.42 3.08 3.08" />
        </svg>
      </button>
    </form>
  )
}
export default SearchForm;