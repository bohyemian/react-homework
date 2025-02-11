import { tm } from "@/utils/tm-merge";

interface QuantityProps {
  defaultQuantity?: number;
  step?: number;
  max?: number;
  updateQuantity?: (q: number, i?: number,) => void;
}

function Quantity({defaultQuantity = 1, step = 1, max = 999, updateQuantity}: QuantityProps) {
  const increase = () => {
    if (max - step >= defaultQuantity) {
      updateQuantity?.(defaultQuantity + step);
    }
  }

  const decrease = () => {
    if (defaultQuantity > step) {
      updateQuantity?.(defaultQuantity - step);
    }
  }

  return (
    <div className="flex items-center p-[10px] border-1 border-(--color-gray-300) bg-(--color-gray-100) leading-0 rounded-[30px]">
      <button type="button" className={tm('w-[28px] h-[28px] select-none', { 'cursor-not-allowed opacity-50': defaultQuantity <= step })} onClick={decrease} aria-disabled={defaultQuantity <= 1}>
        <span className="sr-only">수량 감소</span>
        <svg width={28} height={28} aria-hidden viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9566 13.4576H9.64881V14.3874H17.9566V13.4576Z" fill="#4D4D4D" />
        </svg>
      </button>
      <span className="sr-only">수량</span>
      <output className="min-w-[30px] text-[28px] text-(--color-gray-700) text-center">{defaultQuantity}</output>
      <button type="button" className={tm("w-[28px] h-[28px] select-none", { 'cursor-not-allowed opacity-50': defaultQuantity + step > max })} onClick={increase}>
        <span className="sr-only">수량 증가</span>
        <svg width={28} height={28} aria-hidden viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.462 20.2058H14.4217V14.3874H20.2102V13.4277H14.4217V7.63922H13.462V13.4277H7.64356V14.3874H13.462V20.2058Z" fill="#4D4D4D" />
        </svg>
      </button>
    </div>
  )
}
export default Quantity;