import { tm } from "@/utils/tm-merge";

function SearchForm() {
  const handleAction = () => {
    console.log('뿅');
  }

  return (
    <form action={handleAction} className={
      tm("flex flex-row p-0 pb-4 max-w-[480px] mx-auto",
        "border-b-3 border-gray-700",
        "bg-transparent rounded-none",
        "focus-within:border-white",
        "transition-[border]")
    }>
      <input type="search" className="flex-1 px-4 text-[28px] font-bold" />
      <button type="submit" aria-label="검색" className="p-2">
        <svg width={48} height={48} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 11.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-2.107 5.42 3.08 3.08" />
        </svg>
      </button>
    </form>
  )
}
export default SearchForm;