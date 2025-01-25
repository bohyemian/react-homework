import Homework from './components/homework';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

function App() {
  return (
    <section className="wrap">
      <h1 className="sr-only">과제</h1>
      <Homework />
      <SignUp />
      <SignIn />
    </section>
);
}

export default App;
