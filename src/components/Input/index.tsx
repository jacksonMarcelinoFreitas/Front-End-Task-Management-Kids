import { Container } from './style';
import { IInput } from './type';

export function Input({Icon, name, type, label, placeholder, error, touched, value, onChange, onBlur, onClick, ...rest}: IInput){

  return(
    <Container {...rest}>
      {
        label&&
        <label htmlFor={name}>{label}</label>
      }
      <div>
        {
          Icon&&
          <Icon size={20} onClick={onClick} />
        }
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onBlur={onBlur}
          autoComplete="off"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      {
        touched && error ?
        (<span className='message-error'>{error}</span>) : null
      }
    </Container>
  )
}
