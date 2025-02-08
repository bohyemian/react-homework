import { type CartProductListProps } from "./cart";
import Quantity from "./quantity";

function ProductItem({name, price, stock, imgPath, cartQuantity, updateQuantity}: Omit<CartProductListProps, 'id'>) {
  const priceComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="flex justify-between items-center relative">
      <figure className="flex items-center gap-[18px]">
        {imgPath ? <img className="w-[110px] rounded-full" src={import.meta.env.BASE_URL + imgPath} alt={name} /> : null}
        <figcaption className="relative overflow-hidden text-ellipsis">
          <strong className="overflow-hidden text-ellipsis text-[34px] font-normal whitespace-nowrap">{name}</strong>
          <span className="block text-[30px] font-extrabold">{priceComma}원</span>
        </figcaption>
        <span className="absolute right-0 bottom-0 min-w-[110px] pt-2 text-[18px] text-(--color-gray-500) text-center whitespace-nowrap">재고: {stock}</span>
      </figure>
      <Quantity defaultQuantity={cartQuantity} max={stock} updateQuantity={updateQuantity} />
    </div>
  )
}

export default ProductItem;