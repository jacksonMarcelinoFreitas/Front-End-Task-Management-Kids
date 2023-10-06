import { Container } from "./style";

interface typeProps{
  title?: string,
  titleButton?: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function TitleNavigation({title, titleButton, onClick, ...rest}: typeProps){
  return(
    <Container {...rest}>
      {
        title&&
        <p>{title}</p>
      }
      {
        titleButton&&
        <button onClick={onClick}>{titleButton}</button>
      }
    </Container>
  )
}