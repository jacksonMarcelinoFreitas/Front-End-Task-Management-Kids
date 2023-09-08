import { Container } from "./style";

interface InputProps {
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function ButtonText({value, onClick, ...rest}: InputProps){
  return(
    <Container onClick={onClick} {...rest}>
      {value}
    </Container>
  )
}