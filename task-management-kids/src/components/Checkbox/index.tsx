import { Container } from './style';
interface InputProps{
  text?: string;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox({text, link, onChange, onClick, ...rest}: InputProps){
  return (
    <Container {...rest}>
      <input
        id="check"
        type="checkbox"
        onChange={onChange}
      />
      {
        text&&
        <label htmlFor='check'>
          <a href={link}>{text}</a>
        </label>
      }
    </Container>
  )
}