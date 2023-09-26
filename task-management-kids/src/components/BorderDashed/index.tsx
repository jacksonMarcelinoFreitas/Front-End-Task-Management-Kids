import { ReactNode } from 'react';
import { Container } from './style';

export function BorderDashed({ children, ...rest }: {children?: ReactNode}){
  return(
    <Container {...rest}>
      {children}
    </Container>
  )


}