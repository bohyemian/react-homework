import { useState } from 'react';
import ProductItem from './product-item';

export interface CartProductListProps {
  id: string;
  name: string;
  price: number;
  cartQuantity: number;
  step?: number;
  stock: number;
  imgPath?: string | null;
  updateQuantity?: (q: number, i?: number) => void;
}

const cartProductList: CartProductListProps[] = [
  {
    id: 'product1',
    name: '1A 우유 900mL',
    price: 1880,
    cartQuantity: 2,
    step: 2,
    stock: 9,
    imgPath: 'assets/images/product1.jpg'
  }, {
    id: 'product2',
    name: '맛있는 콩나물 500g',
    price: 1280,
    cartQuantity: 2,
    stock: 5,
    imgPath: 'assets/images/product2.jpg'
  }, {
    id: 'product3',
    name: '고소한 두부 1kg',
    price: 2280,
    cartQuantity: 1,
    stock: 15,
    imgPath: 'assets/images/product3.jpg'
  }
];

function Cart() {
  const [cartProducts, setProductArray] = useState(cartProductList);
  const totalPrice = cartProducts.reduce((sum, {price, cartQuantity}) => sum + (price * cartQuantity), 0);
  const updateQuantity = (i: number) =>  (quantity: number) => {
    const changeArray = cartProducts.map((item, index) => index === i ? {...item, cartQuantity: quantity} : item);

    setProductArray(changeArray);
  }

  return (
    <div className="cart flex flex-col min-w-80 max-w-[1280px] mt-20 mx-auto p-[34px] gap-[42px] border-[10px] border-(--color-gray-700) bg-white rounded-[14px]">
      <h2 className="flex items-center pb-5 border-b border-(--color-gray-700) text-[40px] font-bold">
        <svg width="83" height="83" aria-hidden viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.158 20.88C22.4792 20.88 21.8282 21.1338 21.3483 21.5855C20.8683 22.0372 20.5986 22.6499 20.5986 23.2888C20.5986 23.9276 20.8683 24.5403 21.3483 24.992C21.8282 25.4438 22.4792 25.6975 23.158 25.6975H26.2805L27.0611 28.641C27.0689 28.6749 27.0774 28.7087 27.0867 28.7422L30.5624 41.8218L28.2768 43.9704C25.052 47.0054 27.335 52.1939 31.8958 52.1939H53.8708C54.5496 52.1939 55.2006 51.9401 55.6805 51.4884C56.1605 51.0367 56.4302 50.424 56.4302 49.7852C56.4302 49.1463 56.1605 48.5336 55.6805 48.0819C55.2006 47.6302 54.5496 47.3764 53.8708 47.3764H31.8958L34.4552 44.9676H51.3114C51.7866 44.9674 52.2523 44.8427 52.6564 44.6074C53.0605 44.3721 53.3871 44.0356 53.5995 43.6356L61.2777 29.183C61.4726 28.8159 61.5646 28.4079 61.545 27.9979C61.5254 27.5879 61.3948 27.1894 61.1656 26.8402C60.9363 26.4911 60.6161 26.2028 60.2353 26.0028C59.8545 25.8028 59.4257 25.6977 58.9896 25.6975H31.5528L30.7594 22.7034C30.6208 22.1826 30.3012 21.7202 29.8514 21.3898C29.4016 21.0595 28.8474 20.88 28.2768 20.88H23.158ZM56.4302 58.2158C56.4302 59.1741 56.0257 60.0931 55.3057 60.7707C54.5858 61.4483 53.6093 61.829 52.5911 61.829C51.5729 61.829 50.5964 61.4483 49.8764 60.7707C49.1565 60.0931 48.752 59.1741 48.752 58.2158C48.752 57.2576 49.1565 56.3385 49.8764 55.6609C50.5964 54.9834 51.5729 54.6027 52.5911 54.6027C53.6093 54.6027 54.5858 54.9834 55.3057 55.6609C56.0257 56.3385 56.4302 57.2576 56.4302 58.2158ZM32.1159 61.829C33.1341 61.829 34.1106 61.4483 34.8306 60.7707C35.5505 60.0931 35.955 59.1741 35.955 58.2158C35.955 57.2576 35.5505 56.3385 34.8306 55.6609C34.1106 54.9834 33.1341 54.6027 32.1159 54.6027C31.0977 54.6027 30.1212 54.9834 29.4013 55.6609C28.6813 56.3385 28.2768 57.2576 28.2768 58.2158C28.2768 59.1741 28.6813 60.0931 29.4013 60.7707C30.1212 61.4483 31.0977 61.829 32.1159 61.829V61.829Z" fill="#4D4D4D" />
        </svg>
        장바구니
      </h2>
      {cartProducts.map(({id, ...product}, index) => <ProductItem key={id} updateQuantity={updateQuantity(index)} {...product} />)}
      <strong className="pt-7 border-t border-(--color-gray-700) text-[34px] text-(--color-gray-700) text-right">구매 총액 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</strong>
    </div>
  )
}
export default Cart