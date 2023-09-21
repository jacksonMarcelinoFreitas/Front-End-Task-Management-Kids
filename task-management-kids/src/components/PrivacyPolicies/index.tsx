import { Container, BoxButton } from './style';
import { policy } from './htmlPrivacyPolicie';
import { term } from './htmlTermsAndConditions';
import { useState } from 'react';
import Modal from 'react-modal';

interface InputProps{
  text1?: string;
  text2?: string;
  link1?: string;
  link2?: string;
  name?: string,
  value?: string,
  error?: string,
  touched?: boolean,
  checked?: boolean,
  Icon?: React.ElementType,
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const customModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  content: {
    padding: '32px',
    backgroundColor: 'white',
    borderRadius: '16px',
    border: 'none',
    boxShadow: '5px 3px 10px rgba(49, 219, 157, 0.8)',
  },
}


export function CheckboxPrivacyPolicies({text1, text2, link1, link2, value, touched, name, checked, onChange, onClick, onBlur, error, ...rest}: InputProps){

  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);

  const openModal1 = () =>{setIsOpenModal1(true)}
  const openModal2 = () =>{setIsOpenModal2(true)}
  const closeModal1 = () =>{setIsOpenModal1(false)}
  const closeModal2 = () =>{setIsOpenModal2(false)}

  return (
    <Container {...rest}>
      <div className='box'>
        <input
          id='check'
          name={name}
          type="checkbox"
          onChange={onChange}
          onBlur={onBlur}
          checked={checked}
        />
        {
          text1&&
          <label htmlFor='check'>
            <span>
              Compreendo e aceito os <strong><a onClick={openModal1}>{text1}</a></strong> e as <strong><a onClick={openModal2}>{text2}</a></strong>
            </span>
          </label>
        }
      </div>
      <Modal
          isOpen={isOpenModal1}
          style={customModalStyle}
          onRequestClose={closeModal1}
          contentLabel="Termos de uso"
      >
        <BoxButton><button onClick={closeModal1}>Voltar</button></BoxButton>
        <div dangerouslySetInnerHTML={{ __html: term }} />
      </Modal>
      <Modal
          isOpen={isOpenModal2}
          style={customModalStyle}
          onRequestClose={closeModal2}
          contentLabel="Políticas de privacidade"
      >
        <BoxButton><button onClick={closeModal2}>Voltar</button></BoxButton>
        <div  dangerouslySetInnerHTML={{ __html: policy }} />
      </Modal>
      {
        touched && error ?
        (<span className='message-error'>{error}</span>) : null
      }
    </Container>
  )
}
