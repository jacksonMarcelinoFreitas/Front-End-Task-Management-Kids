import { confirmLogout, customModalStyle } from './confirmLogout';
import { Sidebar } from '../../components/MenuSideBar';
import { IoMenu, IoPower } from 'react-icons/io5';
import { Container, StyledModal } from "./style";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { IHeaderTypes } from './type';
import { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function Header({ icon, ...rest }: IHeaderTypes){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeModal = () =>{setModalIsOpen(false)}
  const openModal = () =>{setModalIsOpen(true)}
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  let userName = user?.name || 'User';
  let parts = userName.split(' ');
  let name = parts[0];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleSignOut = () =>{
    signOut();
    navigate('/');
  }

  return(
    <Container {...rest}>
      {
        isSidebarOpen&&
        <Sidebar
          toggleSidebar={toggleSidebar}
        />
      }

      <IoMenu
        size={24}
        onClick={toggleSidebar}
        className='menu-icon'
      />

      <div className='name'>
        <span>Olá, &nbsp;</span>
        <p>{name}</p>
      </div>

      <IoPower
        size={24}
        onClick={openModal}
        className='logout-icon'
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