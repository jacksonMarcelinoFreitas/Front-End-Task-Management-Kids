import { Container } from "./style";
interface InputProps {
  value: string;
  disabled?: boolean;
  className?: string;
  Icon?: React.ElementType;
  type?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({Icon, value, type, disabled, onClick, className, ...rest}: InputProps){

  const buttonClass = disabled ? 'disabled-button' : '';

  return(
    <Container
      onClick={onClick}
      type={type}
      className={`${className} ${buttonClass}`}
      {...rest}
    >
      {
        Icon&&
        <Icon size={22}/>
      }
      {value}
    </Container>
  )
}