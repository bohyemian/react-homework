import { useState } from "react";

function Quantity({index}) {
  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => {
    setQuantity(prev => prev + 1)
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }


  return (
    <div className="flex items-center px-[8px] border-1 border-(--color-gray-300) bg-(--color-gray-100)">
      <button type="button" className="w-[16px] h-[16px] leading-1" onClick={decrease}>
        <span className="sr-only">수량 감소</span>-
      </button>
      <span className="sr-only">수량</span>
      <strong className="min-w-[12px] text-(--color-gray-700) text-center">{quantity}</strong>
      <button type="button" className="w-[16px] h-[16px] leading-1" onClick={increase}>
        <span className="sr-only">수량 증가</span>+
      </button>
    </div>
  )
}
export default Quantity;