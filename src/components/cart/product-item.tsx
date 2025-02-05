export interface ProductListType {
  id: string;
  name: string;
  price: number;
  imgPath?: string | null;
}


function ProductItem({name, price, imgPath}: Omit<ProductListType, 'id'>) {
  return (
    <figure className="flex items-center gap-[12px]">
      {imgPath ? <img className="w-25.5" src={imgPath} alt={name} /> : null}
      <figcaption>
        {name}
        <span className="block">{price}원</span>
      </figcaption>
    </figure>
  )
}
export default ProductItem;