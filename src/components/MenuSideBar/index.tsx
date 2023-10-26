import backgrounImage from '../../assets/fly-background.svg';
import { Container, Content } from './style'
import { FaHome } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg';


import SidebarItem from '../SidebarItem'
import { Dispatch, SetStateAction } from 'react';

interface IMenuSidebar{
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}

export function Sidebar({ toggleSidebar } : IMenuSidebar){

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
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaHome} Text="Home" />
      </Content>
    </Container>
  )
}
