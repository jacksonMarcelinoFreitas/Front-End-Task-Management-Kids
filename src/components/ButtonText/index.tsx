import { Container } from "./style";
import { IButtonText } from './type';

export function ButtonText({ value, type, onClick, ...rest }: IButtonText){
  return(
    <Container onClick={onClick} type={type} {...rest}>
      {value}
    </Container>
  )
}