import { useState } from "react";

interface QuantityProps {
  index: number;
  max: number;
  idx: number | undefined;
  updateQuantity?: (i: number | undefined, q: number) => void;
}

function Quantity({idx, max, updateQuantity}: QuantityProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => {
    if (max > quantity) {
      const nextValue = quantity + 1;

      setQuantity(nextValue);
      updateQuantity?.(idx, nextValue);
    }
  }

  const decrease = () => {
    if (quantity > 1) {
      const nextValue = quantity - 1;
      setQuantity(nextValue);
      updateQuantity?.(idx, nextValue);
    }
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