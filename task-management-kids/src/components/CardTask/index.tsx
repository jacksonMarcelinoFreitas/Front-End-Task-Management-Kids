import { Container, StyledCardButton } from './style';
import { ICardTask } from './type';

export function CardTask({ Icon, className, nameTask, reward, textButton, onClick, value, ...rest }: ICardTask){
  return(
    <Container className={className} {...rest}>
      <div className="container-card">
        <div className='box-left'>
          <div className='intern-box-left'>
            <p>{nameTask}</p>
            <span>R${reward}</span>
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
