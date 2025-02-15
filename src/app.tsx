import { useEffect, useState } from 'react';
import Header from './components/header';
import Router, { menuList } from './router';
import { getView } from './utils/url-view';
import '@/styles/tailwind.css';

function App() {
  const [route, setRoute] = useState<string | null>(getView);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(location.search);

      setRoute(params.get('view'))
    }

    globalThis.addEventListener('popstate', handlePopState);

    return () => {
      globalThis.removeEventListener('popstate', handlePopState);
    };
  }, [route]);

  return (
    <>
      <Header menuList={menuList} onChangeRoute={setRoute} />
      <Router route={route} />
    </>
);
}

export default App;
