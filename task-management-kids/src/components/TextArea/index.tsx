import { Container } from './style';

interface InputProps {
  value?: string | number | undefined,
  label?: string,
  name?: string,
  error?: string,
  touched?: boolean,
  placeholder?: string,
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (e: React.MouseEventHandler<HTMLTextAreaElement>) => void;
}

export function TextArea({name, label, placeholder, error, touched, value, onChange, onBlur, onClick, ...rest}: InputProps){

  return(
    <Container {...rest}>
      {
        label&&
        <label htmlFor={name}>{label}</label>
      }
      <div>
        <textarea
          id={name}
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
