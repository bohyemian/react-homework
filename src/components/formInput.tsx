import {useId, type ComponentProps} from 'react';


type FormInputProps = ComponentProps<'input'> & {
  type?:string;
  label:string;
  placeholder?: string;
}

function FormInput({type = 'text', label, placeholder}: FormInputProps) {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input id={useId()} type={type} placeholder={placeholder} />
    </div>
  )
}
export default FormInput;