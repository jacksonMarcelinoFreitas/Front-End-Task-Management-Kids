import { IBorderDashed } from './type';
import { Container } from './style';

export function BorderDashed({ children, className, ...rest }: IBorderDashed){
  return(
    <Container className={className} {...rest}>
      {children}
    </Container>
  )
}