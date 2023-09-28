import { ReactNode } from 'react';
import { Container } from './style';

export function BorderDashed({ children, className, ...rest }: {children?: ReactNode, className?: string}){
  return(
    <Container className={className} {...rest}>
      {children}
    </Container>
  )


}