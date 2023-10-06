import { IconType } from "react-icons";
import { Container, StyledModal } from "./style";
import { IoMenu, IoPower } from 'react-icons/io5';
import { useAuth } from '../../hooks/auth';
import { useState } from "react";
import { confirmLogout } from './confirmLogout';
import { useNavigate } from "react-router-dom";

import Modal from 'react-modal';
Modal.setAppElement('#root');
interface headerTypes{
  icon?: IconType;
}

export function Header({icon, ...rest}: headerTypes){
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () =>{setModalIsOpen(true)}
  const closeModal = () =>{setModalIsOpen(false)}
  const { signOut } = useAuth();

  const openMenu = () => {

  }

  const handleSignOut = () =>{
    signOut();
    navigate('/');
  }

  const customModalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.452)',
    },

    content: {
      position: 'absolute' as 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column' as 'column',
      backgroundColor: 'transparent',
      borderRadius: '16px',
      border: 'none',
    },
  }

  return(
    <Container {...rest}>

      <IoMenu
        className='menu-icon'
        size={24}
        onClick={openMenu}
      />

      <IoPower
        className='logout-icon'
        size={24}
        onClick={openModal}
      />

      <Modal
          isOpen={modalIsOpen}
          style={customModalStyle}
          onRequestClose={closeModal}
          contentLabel="Confirmar logout"
      >
        <StyledModal>
          <div dangerouslySetInnerHTML={{ __html: confirmLogout }} />
          <div className="box-buttons">
              <button onClick={closeModal}>Não</button>
              <button onClick={handleSignOut}>Sim</button>
          </div>
        </StyledModal>
      </Modal>

    </Container>
  )
}