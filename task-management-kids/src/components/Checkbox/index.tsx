import { Container } from './style';
interface InputProps{
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Checkbox({text, onClick, ...rest}: InputProps){
  return (
    <Container {...rest}>
      <input
        id="check"
        type="checkbox"
      />
      {
        text&&
        <label htmlFor='check'>
          <a href="#">{text}</a>
        </label>
      }
    </Container>
  )
}