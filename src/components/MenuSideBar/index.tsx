import backgrounImage from '../../assets/fly-background.svg';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Content } from './style'
import { CgClose } from 'react-icons/cg';
import SidebarItem from '../SidebarItem';
import { FaHome } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

interface IMenuSidebar{
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}

export function Sidebar({ toggleSidebar } : IMenuSidebar){
  const navigate = useNavigate();

  return (
    <Container >
      <img
        className='image-background'
        src={backgrounImage}
        alt="background"
      />
      <div className='header-menu'>
        <CgClose size={32} onClick={toggleSidebar} />
      </div>
      <Content>
        <SidebarItem
          Icon={FaHome}
          Text="Home"
          onClick={() => {navigate("/")}}
        />
        <SidebarItem
          Icon={BiLogOut}
          Text="Sair"
          onClick={() => {navigate("/")}}
        />
        {/* </SidebarItem> */}
      </Content>
    </Container>
  )
}
