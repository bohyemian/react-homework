interface HeaderProps {
  routeSign: () => void
}

function Header({routeSign}: HeaderProps) {
  function toggleUserMenu(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    routeSign?.();
  }

  return (
    <header className="header">
      <div className="inner">
        <a href="/" className="menu">즐겨찾기</a>
        <a href="/" className="menu">입점신청</a>
        <div className="user-menu">
          <a href="/" className="menu" onClick={toggleUserMenu}>로그인</a>
          <a href="/" className="menu" onClick={toggleUserMenu}>회원가입</a>
        </div>
        <a href="/" className="menu">고객센터</a>
      </div>
    </header>
  )
}

export default Header;