import Quantity from "./quantity";

export interface ProductListType {
  id: string;
  name: string;
  price: number;
  cartQuantity: number;
  stock: number;
  imgPath?: string | null;
  index: number;
  updateQuantity?: (q: number, i?: number) => void;
}

function ProductItem({name, price, stock, imgPath, index, cartQuantity = 1, updateQuantity}: Omit<ProductListType, 'id'>) {
  const priceComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="flex justify-between items-center relative">
      <figure className="flex items-center gap-[18px]">
        {imgPath ? <img className="w-[110px]" src={import.meta.env.BASE_URL + imgPath} alt={name} /> : null}
        <figcaption className="relative overflow-hidden text-ellipsis">
          <strong className="overflow-hidden text-ellipsis text-[34px] font-normal whitespace-nowrap">{name}</strong>
          <span className="block text-[30px] font-extrabold">{priceComma}원</span>
        </figcaption>
        <span className="absolute right-0 bottom-0 min-w-[110px] pt-2 text-[18px] text-(--color-gray-500) text-center whitespace-nowrap">재고: {stock}</span>
      </figure>
      <Quantity idx={index} defaultQuantity={cartQuantity} max={stock} updateQuantity={updateQuantity} />
    </div>
  )
}
export default ProductItem;