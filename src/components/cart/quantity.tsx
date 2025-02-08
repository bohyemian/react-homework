import { tm } from "@/utils/tm-merge";
import { useState } from "react";

interface QuantityProps {
  idx: number;
  max: number;
  defaultQuantity?: number;
  updateQuantity?: (q: number, i?: number,) => void;
}

function Quantity({idx, max, updateQuantity, defaultQuantity}: QuantityProps) {
  const [quantity, setQuantity] = useState<number>(defaultQuantity ?? 1);

  const increase = () => {
    if (max > quantity) {
      const nextValue = quantity + 1;

      setQuantity(nextValue);
      updateQuantity?.(nextValue, idx);
    }
  }

  const decrease = () => {
    if (quantity > 1) {
      const nextValue = quantity - 1;
      setQuantity(nextValue);
      updateQuantity?.(nextValue, idx);
    }
  }

  return (
    <div className="flex items-center p-[10px] border-1 border-(--color-gray-300) bg-(--color-gray-100) leading-0 rounded-[30px]">
      <button type="button" className={tm('w-[28px] h-[28px] select-none', { 'cursor-not-allowed opacity-50': quantity <= 1 })} onClick={decrease} aria-disabled={quantity <= 1}>
        <span className="sr-only">수량 감소</span>
        <svg width={28} height={28} aria-hidden viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9566 13.4576H9.64881V14.3874H17.9566V13.4576Z" fill="#4D4D4D" />
        </svg>
      </button>
      <span className="sr-only">수량</span>
      <output className="min-w-[28px] text-[28px] text-(--color-gray-700) text-center">{quantity}</output>
      <button type="button" className={tm("w-[28px] h-[28px] select-none", { 'cursor-not-allowed opacity-50': quantity >= max })} onClick={increase}>
        <span className="sr-only">수량 증가</span>
        <svg width={28} height={28} aria-hidden viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.462 20.2058H14.4217V14.3874H20.2102V13.4277H14.4217V7.63922H13.462V13.4277H7.64356V14.3874H13.462V20.2058Z" fill="#4D4D4D" />
        </svg>
      </button>
    </div>
  )
}
export default Quantity;