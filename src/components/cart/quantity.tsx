import { useState } from "react";

interface QuantityProps {
  index: number;
  max: number;
}

function Quantity({idx, max}: QuantityProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => {
    if (max > quantity) {
      setQuantity(prev => prev + 1)
    }
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const currentQuantity = () => {
    
  }

  return (
    <div className="flex items-center px-[8px] border-1 border-(--color-gray-300) bg-(--color-gray-100) rounded-3xl">
      <button type="button" className="w-[16px] h-[16px] leading-1 select-none" onClick={decrease} aria-disabled={quantity <= 1}>
        <span className="sr-only">수량 감소</span>-
      </button>
      <span className="sr-only">수량</span>
      <strong className="min-w-[20px] text-(--color-gray-700) text-center">{quantity}</strong>
      <button type="button" className="w-[16px] h-[16px] leading-1 select-none" onClick={increase}>
        <span className="sr-only">수량 증가</span>+
      </button>
    </div>
  )
}
export default Quantity;