import { useState } from 'react';
import Header from './components/header';
import Homework from './components/homework';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import CoupangGuide from './components/coupang-guide';
import CoupangSignIn from './components/coupang-signin';

function App() {
  const [isLoginPage, setLoginPage] = useState<boolean>(true);
  const userMenu = [{menu: '로그인', isActive: true}, {menu: '회원가입', isActive: false}];

  function handleLoginToggle(isLogin: boolean) {
    setLoginPage(isLogin);
  }

  return (
    <>
      <Header routeSign={handleLoginToggle} userMenu={userMenu} />
      <section className="wrap">
        <h1 className="sr-only">과제</h1>
        <Homework />
        {isLoginPage ? <SignIn /> : <SignUp />}
      </section>
      <section>
        {isLoginPage ?
          <>
            <h2 className="sr-only">쿠팡 로그인</h2>
            <CoupangSignIn />
          </> :
          null
        }
      </section>
      <section className="wrap">
        <h2>Coupang</h2>
        <CoupangGuide />
      </section>
    </>
);
}

export default App;
