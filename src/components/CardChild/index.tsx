import { Container, StyledCardButton } from './style';
import { ICardChild } from './type';


export function CardChild({ Icon, nameChild, age, tasks, textButton, onClick, value, ...rest }: ICardChild){
  return(
    <Container {...rest}>
      <div className="container-card">
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
      </div>
    </Container>
  )
}
