import Homework from '../components/homework';
import SignIn from '../components/signIn';
import SignUp from '../components/signUp';
import CoupangGuide from '../components/coupang-guide';
import CoupangSignIn from '../components/coupang-signin';
import Cart from '../components/cart/cart';
import NotFound from '@/components/not-found';

export const menuList = [
  {id: 'week1', text: '1주차 과제', element: <Homework />},
  {id: 'cart', text: '장바구니🛒', element: <Cart />},
  {id: 'login', text: '로그인', element: <SignIn />},
  {id: 'join', text: '회원가입', element: <SignUp />},
  {id: 'coupangLogin', text: '쿠팡 로그인', element: <CoupangSignIn />},
  {id: 'guide', text: 'guide style', element: <CoupangGuide />},
]

function Router({route}: {route: string | null}) {
  return menuList.find(({id}) => id === route)?.element ?? <NotFound />
}

export default Router;