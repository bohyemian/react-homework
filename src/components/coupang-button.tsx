import { ComponentProps } from "react";

type CoupanButtonProps = ComponentProps<'button'> & {
  type?: string;
  children?: string;
  className?: string;
}

function CoupanButton({type = 'button', children = '확인', className, ...props}: CoupanButtonProps) {
  className = className ? `coupang-btn ${className}`: 'coupang-btn';

  return (
    <button type={type} className={className} {...props}>{children}</button>
  )
}

export default CoupanButton;