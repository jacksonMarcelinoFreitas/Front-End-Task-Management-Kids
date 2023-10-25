import { ITitleNavigation } from "./type";
import { Container } from "./style";

export function TitleNavigation({title, titleButton, onClick, ...rest}: ITitleNavigation){
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