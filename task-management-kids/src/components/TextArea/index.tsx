import { Container } from './style';
import { ITextArea } from './type';

export function TextArea({name, label, placeholder, error, touched, value, onChange, onBlur, onClick, ...rest}: ITextArea){

  return(
    <Container {...rest}>
      {
        label&&
        <label htmlFor={name}>{label}</label>
      }
      <div>
        <textarea
          id={name}
          name={name}
          value={value}
          onBlur={onBlur}
          autoComplete="off"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      {
        touched && error ?
        (<span className='message-error'>{error}</span>) : null
      }
    </Container>
  )
}
