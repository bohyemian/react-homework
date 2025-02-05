import { useState } from 'react';
import Header from './components/header';
import Homework from './components/homework';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import CoupangGuide from './components/coupang-guide';
import CoupangSignIn from './components/coupang-signin';
import { getUIView } from './utils/url-view';

function App() {
  const [isLoginPage] = useState<boolean>(true);
  const [urlView] = useState<string | null>(getUIView);

  return (
    <>
      <Header />
      {urlView === 'week1' || urlView === 'login' || urlView === 'join' ?
        <section className="wrap">
          <h1 className="sr-only">과제</h1>
          {urlView === 'week1' ? <Homework /> : null}
          {urlView === 'login' ? <SignIn /> : null}
          {urlView === 'join' ? <SignUp /> : null}
        </section> : null}
      {urlView === 'coupangLogin' ?
        <section>
          {isLoginPage ?
            <>
              <h2 className="sr-only">쿠팡 로그인</h2>
              <CoupangSignIn />
            </> :
            null
          }
        </section> : null}

      {urlView === 'guide' ?
        <section className="wrap">
          <h2>Coupang</h2>
          <CoupangGuide />
        </section> : null}
    </>
);
}

export default App;
