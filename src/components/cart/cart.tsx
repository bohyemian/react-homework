import ProductItem, { ProductListType } from './product-item';

const products:ProductListType[] = [
  {
    id: 'product1',
    name: '1A 우유 900mL',
    price: 1880,
    imgPath: 'public/images/products/product1.png'
  }, {
    id: 'product2',
    name: '맛있는 콩나물 500g',
    price: 1280,
    imgPath: 'public/images/products/product2.png'
  }, {
    id: 'product3',
    name: '고소한 두부 1kg',
    price: 2280,
    imgPath: 'public/images/products/product3.png'
  }
]

function Cart() {
  return (
    <div className="flex flex-col min-w-80 m-[24px] p-8 gap-[24px] border-[6px] border-(--color-gray-700) bg-white rounded-[12px]">
      {products.map(({id, ...product}) => <ProductItem key={id} {...product} />)}
    </div>
  )
}
export default Cart