import { Container } from './style';
import { ICardManager } from './type';


export function CardManager({ textCard, typeCard, onClick, ...rest }: ICardManager){
  return(
    <Container onClick={onClick} className={typeCard} {...rest}>
      <p>{textCard}</p>
    </Container>
  )
}
