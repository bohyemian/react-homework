// import { AnnoyedSquare } from "@mynaui/icons-react";

function Loading() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-[50%] align-center">
      <svg className="mx-auto animate-bounce" aria-hidden="true" width={60} height={60} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1m-.5-4.5V10m-5.5.5h1" /><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
      </svg>
      <span className="block text-grey-800">🤏🏻조금만 기다려 주세용.</span>
    </div>
  )
}
export default Loading