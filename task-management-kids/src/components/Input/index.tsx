import { Container } from './style';

interface InputProps {
  type: string,
  value?: string | number | undefined,
  label?: string,
  name?: string,
  error?: string,
  touched?: boolean,
  placeholder?: string,
  Icon?: React.ElementType,
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEventHandler<HTMLInputElement>) => void;
}

export function Input({Icon, name, type, label, placeholder, error, touched, value, onChange, onBlur, onClick, ...rest}: InputProps){

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
