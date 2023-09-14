import { Container } from "./style";

interface InputProps {
  value: string;
  type: 'submit'|'button'|'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function ButtonText({value, type, onClick, ...rest}: InputProps){
  return(
    <Container onClick={onClick} type={type} {...rest}>
      {value}
    </Container>
  )
}