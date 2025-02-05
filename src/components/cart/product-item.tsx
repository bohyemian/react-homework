import Quantity from "./quantity";

export interface ProductListType {
  id: string;
  name: string;
  price: number;
  imgPath?: string | null;
  index?: number | undefined;
}


function ProductItem({name, price, imgPath, index}: Omit<ProductListType, 'id'>) {
  return (
    <div className="flex justify-between items-center">
      <figure className="flex items-center  gap-[12px]">
        {imgPath ? <img className="w-25.5" src={imgPath} alt={name} /> : null}
        <figcaption>
          {name}
          <span className="block">{price}원</span>
        </figcaption>
      </figure>
      <Quantity index={index} />
    </div>
  )
}
export default ProductItem;