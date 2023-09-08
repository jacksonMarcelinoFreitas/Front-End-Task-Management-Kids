import { Container } from './style';

interface InputProps {
  type: string,
  value?: string,
  textLabel?: string,
  placeholder?: string,
  nameInput: string,
  Icon?: React.ElementType,
}

export function Input({Icon, nameInput, type, textLabel, placeholder, value, ...rest}: InputProps){
  return(
    <Container {...rest}>
      {
        textLabel&&
        <label htmlFor={nameInput}>{textLabel}</label>
      }

      <div>
        {
          Icon&&
          <Icon size={20} />
        }
        <input
          type={type}
          id={nameInput}
          placeholder={placeholder}
        />
      </div>
    </Container>
  )
}