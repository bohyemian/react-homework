function NotFound() {
  return (
    <div role="alert" className="flex flex-col justify-center items-center gap-y-10 py-100 text-[#398f74]">
      <svg width={100} height={100} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="m8 12 2-1.5L8 9m8 3-2-1.5L16 9m0 7.25-1.333-1-1.334 1-1.333-1-1.333 1-1.334-1-1.333 1" /><path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z" />
      </svg>
      <p className="font-bold">상단의 메뉴를 눌러 이동해 주세요.</p>
    </div>
  );
}

export default NotFound;
