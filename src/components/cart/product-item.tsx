import Quantity from "./quantity";

export interface ProductListType {
  id: string;
  name: string;
  price: number;
  stock: number;
  imgPath?: string | null;
  index?: number | undefined;
}


function ProductItem({name, price, stock, imgPath, index}: Omit<ProductListType, 'id'>) {
  return (
    <div className="flex justify-between items-center">
      <figure className="flex items-center gap-[12px]">
        {imgPath ? <img className="w-25.5" src={imgPath} alt={name} /> : null}
        <figcaption className="relative">
          {name}
          <span className="block font-extrabold">{price}원</span>
          <span className="absolute inset-x-[100%] top-0 ml-3 px-2 py-1 text-[13px] whitespace-nowrap">재고: {stock}</span>
        </figcaption>
      </figure>
      <Quantity idx={index} max={stock} />
    </div>
  )
}
export default ProductItem;