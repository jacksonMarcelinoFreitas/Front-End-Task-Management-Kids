import { Container } from "./style";

interface InputProps {
  value: string;
  Icon?: React.ElementType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({Icon, value, onClick, ...rest}: InputProps){
  return(
    <Container onClick={onClick} {...rest}>
      {
        Icon&&
        <Icon size={22}/>
      }
      {value}
    </Container>
  )
}