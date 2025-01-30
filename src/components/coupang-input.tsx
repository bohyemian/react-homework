import { ComponentProps, useId } from "react";

type CoupangInputProps = ComponentProps<'input'> & {
  label: string;
  labelHidden?: boolean;
  onChangeValue?: (target: EventTarget & HTMLInputElement) => void;
  onInputBlur?: (target: EventTarget & HTMLInputElement) => void;
}

function CoupangInput({type = 'text', label, labelHidden = false, onChangeValue, onInputBlur}: CoupangInputProps) {
  const inputId = useId();
  const inputClassName = labelHidden ? 'coupang-input hidden' : 'coupang-input';

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue?.(e.currentTarget);
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    onInputBlur?.(e.currentTarget);
  }

  return (
    <>
      <div className={inputClassName}>
        {type === 'email' && <svg xmlns="http://www.w3.org/2000/svg" width={45} height={50} viewBox="0 0 45 50" fill="none">
          <g clipPath="url(#clip0_1_249)">
            <rect width={45} height={50} fill="white" />
            <rect x="0" y="0" width="45" height="50" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 17H32.5V33H12.5V17ZM15.2314 18.6L22.5 25.8686L29.7686 18.6H15.2314ZM30.9 19.7314L25.6314 25L30.9 30.2686V19.7314ZM29.7686 31.4L24.5 26.1314L22.5 28.1314L20.5 26.1314L15.2314 31.4H29.7686ZM14.1 30.2686V19.7314L19.3686 25L14.1 30.2686Z" fill="#CCCCCC" />
          </g>
        </svg>}
        {type === 'password' && <svg xmlns="http://www.w3.org/2000/svg" width={45} height={50} viewBox="0 0 45 50" fill="none">
          <g clipPath="url(#clip0_1_251)">
            <rect width={45} height={50} fill="#CCCCCC" />
            <rect x="0" y="0" width="45" height="50" fill="white" />
            <path d="M21.0888 28.2491C20.7201 27.9558 20.484 27.5053 20.484 27C20.484 26.1163 21.2061 25.4 22.0968 25.4C22.9875 25.4 23.7096 26.1163 23.7096 27C23.7096 27.5053 23.4735 27.9558 23.1048 28.2491V31H21.0888V28.2491Z" fill="#CCCCCC" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.8898 21.4C15.0261 20.2818 15.4547 18.9086 16.376 17.7139C17.5617 16.1763 19.5154 15 22.5 15C25.4846 15 27.4383 16.1763 28.624 17.7139C29.5453 18.9086 29.9739 20.2818 30.1102 21.4H32.58V35H12.42V21.4H14.8898ZM16.5174 21.4C16.6481 20.5593 16.9884 19.5531 17.657 18.6861C18.5276 17.5571 20.0011 16.6 22.5 16.6C24.999 16.6 26.4725 17.5571 27.3431 18.6861C28.0116 19.5531 28.3519 20.5593 28.4827 21.4H16.5174ZM14.0328 23V33.4H30.9672V23H14.0328Z" fill="#CCCCCC" />
          </g>
        </svg>}

        <label htmlFor={inputId}>{label}</label>
        <input type={type} id={inputId} onChange={handleChangeValue} onBlur={handleBlur} />
      </div>
    </>
  )
}

export default CoupangInput;