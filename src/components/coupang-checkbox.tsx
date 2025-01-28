import { ComponentProps, useId } from "react";

type CoupangCheckProps = ComponentProps<'input'> & {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChecked?: () => void;

}

function CoupangCheck({label, checked = false, disabled = false, onChecked}: CoupangCheckProps) {
  const checkboxId = useId();

  function handleToggleCheck() {
    onChecked?.();
  }

  return (
    <>
      <input type="checkbox" id={checkboxId} className="coupang-checkbox" checked disabled={disabled} onChange={handleToggleCheck} />
      <label htmlFor={checkboxId}>
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
          <g filter="url(#filter0_d_886_485)">
            <mask id="path-1-inside-1_886_485" fill="white">
              <rect x={3} y={2} width={24} height={24} rx="0.791667" />
            </mask>
            <rect x={3} y={2} width={24} height={24} rx="0.791667" fill="#F4F4F4" />
            <rect x={3} y={2} width={24} height={24} rx="0.791667" stroke="#CCCCCC" strokeWidth={2} mask="url(#path-1-inside-1_886_485)" />
          </g>
          {checked && <path fillRule="evenodd" clipRule="evenodd" d="M23 9.39644L12.1559 20L7 14.5001L8.4888 13.1656L12.2194 17.1451L21.5719 8L23 9.39644Z" fill={disabled ? "#AAA9A9" : "#0074E9"} />}
        </svg>
        {label}
      </label>
    </>
  )
}

export default CoupangCheck;