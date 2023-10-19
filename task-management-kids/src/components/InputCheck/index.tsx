import { IInputCheck } from "./type";
import { Container } from "./style";

export function InputCheck({ Icon, id, name, text, checked, placeholder, error, touched, onChange, onBlur, onClick, ...rest }: IInputCheck){
  return(
    <Container {...rest}>
      <input
        id={id}
        name={name}
        type='checkbox'
        onBlur={onBlur}
        checked={checked}
        onChange={onChange}
        placeholder={placeholder}
      />
      {
        text&&
        <label htmlFor={name}>{text}</label>
      }
      {
        touched && error ?
        (<span className='message-error'>{error}</span>) : null
      }
    </Container>
  )
}
