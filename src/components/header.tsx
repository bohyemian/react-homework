function Header() {
  return (
    <header className="header">
      <div className="inner">
        <a href="/?view=week1" className="menu">1주차 과제</a>
        <a href="/?view=cart" className="menu">장바구니🛒</a>
        <div className="user-menu">
          <a href="/?view=login" className="menu">로그인</a>
          <a href="/?view=join" className="menu">회원가입</a>
          <a href="/?view=coupangLogin" className="menu">쿠팡 로그인</a>
        </div>
        <a href="/?view=guide" className="menu">guide style</a>
      </div>
    </header>
  )
}

export default Header;