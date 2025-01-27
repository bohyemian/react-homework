import { useState } from 'react';
import Header from './components/header';
import Homework from './components/homework';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import CoupangGuide from './components/coupang-guide';

function App() {
  const [isLoginPage, setLoginPage] = useState<boolean>(true);

  function handleLoginToggle() {
    setLoginPage(!isLoginPage);
  }

  return (
    <>
      <Header routeSign={handleLoginToggle} />
      <section className="wrap">
        <h1 className="sr-only">과제</h1>
        <Homework />
        {isLoginPage ? <SignIn /> : <SignUp />}
      </section>
      <section className="wrap">
        <h2>Coupang</h2>
        <CoupangGuide />
      </section>
    </>
);
}

export default App;
