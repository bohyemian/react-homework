interface UserMenu {
  menu: string;
  isActive: boolean
}

interface HeaderProps {
  userMenu: UserMenu[];
  routeSign: (isLogin: boolean) => void;
}

function Header({routeSign, userMenu}: HeaderProps) {
  function toggleUserMenu(isLogin: boolean, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    routeSign?.(isLogin);
  }

  return (
    <header className="header">
      <div className="inner">
        <a href="/" className="menu">즐겨찾기</a>
        <a href="/" className="menu">입점신청</a>
        <div className="user-menu">
          {userMenu.map(({menu, isActive}) => <a href="/" key={menu} className="menu" onClick={(e) => toggleUserMenu(isActive, e)}>{menu}</a>)}
        </div>
        <a href="/" className="menu">고객센터</a>
      </div>
    </header>
  )
}

export default Header;