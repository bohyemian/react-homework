import { useState } from 'react';
import ProductItem, { ProductListType } from './product-item';

const products: Omit<ProductListType, 'index'>[] = [
  {
    id: 'product1',
    name: '1A 우유 900mL',
    price: 1880,
    stock: 10,
    imgPath: 'assets/images/products/product1.png'
  }, {
    id: 'product2',
    name: '맛있는 콩나물 500g',
    price: 1280,
    stock: 5,
    imgPath: 'assets/images/products/product2.png'
  }, {
    id: 'product3',
    name: '고소한 두부 1kg',
    price: 2280,
    stock: 15,
    imgPath: 'assets/images/products/product3.png'
  }
];

function Cart() {
  const [productArray, setProductArray] = useState(() => products.map(item => [item.price, 1]));
  const priceSum = productArray.reduce((sum, [price, q]) => sum + (price * q), 0);
  const changeQuantity = (i: number | undefined, q: number) => {
    const changeArray = productArray.map((item, index) => index === i ? [item[0], q] : item);

    setProductArray(changeArray);
  }

  return (
    <div className="flex flex-col min-w-80 max-w-[1280px] mt-20 mx-auto p-8 gap-[24px] border-[6px] border-(--color-gray-700) bg-white rounded-[12px]">
      <h2 className="pb-5 border-b border-(--color-gray-700) font-bold">🛒 장바구니</h2>
      {products.map(({id, ...product}, index) => <ProductItem key={id} index={index} updateQuantity={changeQuantity} {...product} />)}
      <strong className="pt-7 border-t border-(--color-gray-700) text-right">구매 총액 : {priceSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</strong>
    </div>
  )
}
export default Cart