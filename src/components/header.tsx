import { tm } from '@/utils/tm-merge';
import { setUIView } from '@/utils/url-view';
import { JSX } from 'react';

interface ChangeRouteProps {
  menuList: {
    id: string;
    text: string;
    element: JSX.Element;
  }[];
  onChangeRoute: React.Dispatch<React.SetStateAction<string | null>>
}

function Header({menuList, onChangeRoute}: ChangeRouteProps) {
  const handleRoute = (e :React.MouseEvent<HTMLAnchorElement>) => {
    const id = e.currentTarget.search.split('=')[1];

    e.preventDefault();
    onChangeRoute?.(id);
    setUIView(id);
  }

  return (
    <header className="header">
      <div className="inner">
        {menuList?.map(menu => <a key={menu.id} href={`/react-homework/?view=${menu.id}`} className={tm('menu', {'ml-auto' : menu.id === 'login' })} onClick={handleRoute}>{menu.text}</a>)}
      </div>
    </header>
  )
}

export default Header;