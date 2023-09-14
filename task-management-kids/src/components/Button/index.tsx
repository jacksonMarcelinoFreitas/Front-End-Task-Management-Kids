import { Container } from "./style";

interface InputProps {
  value: string;
  type?: 'submit' | 'button' | 'reset';
  Icon?: React.ElementType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({Icon, value, type, onClick, ...rest}: InputProps){
  return(
    <Container onClick={onClick} type={type} {...rest}>
      {
        Icon&&
        <Icon size={22}/>
      }
      {value}
    </Container>
  )
}