import { ComponentProps } from "react";

type FormButtonProps = ComponentProps<'button'> & {
  type?: string;
  children: string;
  className?: string;
}

function FormButton({type = 'button', children = '확인', className = 'primary'}: FormButtonProps) {
  className = `btn ${className}`;

  return <button type={type} className={className}>{children}</button>
}

export default FormButton;