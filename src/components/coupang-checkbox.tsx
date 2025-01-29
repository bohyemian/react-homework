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
    <div className="coupang-checkbox">
      <input type="checkbox" id={checkboxId} checked disabled={disabled} onChange={handleToggleCheck} />
      <label htmlFor={checkboxId}>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
          <g filter="url(#filter0_d_4940_346)">
            <mask id="path-1-inside-1_4940_346" fill="white">
              <rect width={24} height={24} rx="0.791667" />
            </mask>
            <rect width={24} height={24} rx="0.791667" fill="#F4F4F4" />
            <rect width={24} height={24} rx="0.791667" stroke="#CCCCCC" strokeWidth={2} mask="url(#path-1-inside-1_4940_346)" />
          </g>
          {checked && <path fillRule="evenodd" clipRule="evenodd" d="M20 7.39644L9.15593 18L4 12.5001L5.4888 11.1656L9.21937 15.1451L18.5719 6L20 7.39644Z" fill={disabled ? "#AAA9A9" : "#0074E9"} />}
        </svg>
        {label}
      </label>
      <div className="tooltip">
        개인 정보 보호를 위해 본인 기기에서만 이용해주세요
        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
          <path d="M0 7.84619L4.85716 0.846191L10 7.84619H0Z" fill="#F4F4F4" />
        </svg>
      </div>
    </div>
  )
}

export default CoupangCheck;