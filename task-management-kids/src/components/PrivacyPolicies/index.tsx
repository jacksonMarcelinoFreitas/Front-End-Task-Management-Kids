import { Container } from './style';
import Modal from 'react-modal';
import { useState } from 'react';
import { policy } from './htmlPrivacyPolicie';
import { term } from './htmlTermsAndConditions';

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

export function CheckboxPrivacyPolicies({text1, text2, link1, link2, value, touched, name, checked, onChange, onClick, onBlur, error, ...rest}: InputProps){

  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);

  function abrirModal1() {
    setIsOpenModal1(true);
  }
  function abrirModal2() {
    setIsOpenModal2(true);
  }

  function fecharModal1() {
    setIsOpenModal1(false);
  }
  function fecharModal2() {
    setIsOpenModal2(false);
  }

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
              Compreendo e aceito os <strong><a onClick={abrirModal1}>{text1}</a></strong> e as <strong><a onClick={abrirModal2}>{text2}</a></strong>
            </span>
          </label>
        }
      </div>
      <Modal
          isOpen={isOpenModal1}
          onRequestClose={fecharModal1}
          contentLabel="Modal de exemplo"
      >
        <div dangerouslySetInnerHTML={{ __html: term }} />
      </Modal>
      <Modal
          isOpen={isOpenModal2}
          onRequestClose={fecharModal2}
          contentLabel="Modal de exemplo"
      >
        <div dangerouslySetInnerHTML={{ __html: policy }} />
      </Modal>
      {
        touched && error ?
        (<span className='message-error'>{error}</span>) : null
      }
    </Container>
  )
}
