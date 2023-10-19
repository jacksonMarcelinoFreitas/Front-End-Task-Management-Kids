import { policy, term, customModalStyle } from './htmlTermsAndConditions';
import { Container, BoxButton } from './style';
import { InputCheck } from '../InputCheck';
import { IPrivacyPolicy } from './type';
import { useState } from 'react';
import Modal from 'react-modal';


export function CheckboxPrivacyPolicies({text1, text2, link1, link2, value, touched, name, checked, onChange, onClick, onBlur, error, ...rest}: IPrivacyPolicy){

  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const openModal1 = () =>{setIsOpenModal1(true)}
  const openModal2 = () =>{setIsOpenModal2(true)}
  const closeModal1 = () =>{setIsOpenModal1(false)}
  const closeModal2 = () =>{setIsOpenModal2(false)}

  return (
    <Container {...rest}>
      <div className='box'>
        <InputCheck
          name={name}
          onBlur={onBlur}
          checked={checked}
          onChange={onChange}
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
        {
          touched && error ?
          (<span className='message-error'>{error}</span>) : null
        }
      <Modal
          isOpen={isOpenModal1}
          style={customModalStyle}
          contentLabel="Termos de uso"
          onRequestClose={closeModal1}
      >
        <BoxButton>
          <button onClick={closeModal1}>Voltar</button>
        </BoxButton>
        <div dangerouslySetInnerHTML={{ __html: term }} />
      </Modal>
      <Modal
        isOpen={isOpenModal2}
        style={customModalStyle}
        onRequestClose={closeModal2}
        contentLabel="Políticas de privacidade"
      >
        <BoxButton>
          <button onClick={closeModal2}>Voltar</button>
        </BoxButton>
        <div dangerouslySetInnerHTML={{ __html: policy }} />
      </Modal>
    </Container>
  )
}
