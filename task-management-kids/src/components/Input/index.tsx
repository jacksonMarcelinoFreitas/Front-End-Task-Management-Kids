import { Container } from './style';

interface InputProps {
  type: string,
  value?: string,
  label?: string,
  placeholder?: string,
  name?: string,
  error?: string,
  touched?: boolean,
  Icon?: React.ElementType,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({Icon, name, type, label, placeholder, error, touched, value, onChange, onBlur, ...rest}: InputProps){

  return(
    <Container {...rest}>
      {
        label&&
        <label htmlFor={name}>{label}</label>
      }
      <div>
        {
          Icon&&
          <Icon size={20} />
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
