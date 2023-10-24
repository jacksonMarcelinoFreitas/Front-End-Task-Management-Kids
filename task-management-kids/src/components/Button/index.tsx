import { Container } from "./style";
import { IButtonProps } from './type';

export function Button({ Icon, value, type, disabled, onClick, className, loading, ...rest }: IButtonProps){

  const buttonClass = disabled ? 'disabled-button' : '';

  return(
    <Container
      type={type}
      onClick={onClick}
      className={`${className} ${buttonClass}`}
      {...rest}
    >
      {
        Icon&&
        <Icon size={22}/>
      }
      {!loading ? value : 'loading...'}
    </Container>
  )
}