import { Container } from './style';

interface InputProps{
  textCard: string,
  typeCard?: CardType,
  onClick?: (e: React.MouseEvent) => void;
}

type CardType = 'edit' | 'register' | 'list' | 'start';

export function CardManager({textCard, typeCard, onClick, ...rest}: InputProps){

  return(
    <Container onClick={onClick} className={typeCard} {...rest}>
      <p>{textCard}</p>
    </Container>
  )
}
