import { Container, StyledCardButton } from './style';

interface InputProps {
  nameTask?: string,
  reward?: number,
  // tasks?: number | 0,
  value?: string,
  // externalId?: string,
  textButton?: string,
  Icon?: React.ElementType,
  // type?: "button" | "submit" | "reset",
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function CardTask({Icon, nameTask, reward, textButton, onClick, value, ...rest}: InputProps){

  return(
    <Container {...rest}>
      <div className='box-left'>
        <div className='intern-box-left'>
          <p>{nameTask}</p>
          <span>R${reward},00</span>
        </div>
      </div>
      <StyledCardButton type='button' value={value} onClick={onClick}>
        {
          Icon &&
          <Icon size={28}  />
        }
        <span>{textButton}</span>
      </StyledCardButton>
    </Container>
  )
}
