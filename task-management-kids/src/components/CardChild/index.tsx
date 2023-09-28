import { Container, StyledCardButton } from './style';

interface InputProps {
  nameChild?: string,
  age?: number,
  tasks?: number | 0,
  value?: string,
  // externalId?: string,
  textButton?: string,
  Icon?: React.ElementType,
  // type?: "button" | "submit" | "reset",
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function CardChild({Icon, nameChild, age, tasks, textButton, onClick, value, ...rest}: InputProps){

  return(
    <Container {...rest}>
      <div className='box-left'>
        <div className='intern-box-left'>
          <p>{nameChild}</p>
          <span>{age} anos</span>
        </div>
        <div className='intern-box-right'>
          <p>{tasks}</p>
          <span>tarefas</span>
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
