import imageProfileDefault from '../../assets/image-profile-default.svg';
import backgrounImage from '../../assets/fly-background.svg';
import { Dispatch, SetStateAction } from 'react';
import { FaHome, FaChild } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Container, Content } from './style'
import { useAuth } from '../../hooks/auth';
import { BiLogOut } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import SidebarItem from '../SidebarItem';

interface IMenuSidebar{
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}

export function Sidebar({ toggleSidebar } : IMenuSidebar){
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  let name = user?.name || 'User';

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
      <div className='profile'>
        <img src={imageProfileDefault} alt="default image profile" />
        <p>{name}</p>
      </div>
      <Content>
        <SidebarItem
          Icon={BiLogOut}
          Text="Sair"
          onClick={signOut}
        />
        <SidebarItem
          Icon={FaHome}
          Text="Home"
          onClick={() => {navigate("/")}}
        />
        {
          user?.role.includes('SPONSOR') &&
          (
            <SidebarItem
              Icon={FaChild}
              Text="Mais crianças"
              onClick={() => {navigate("/RegisterChild")}}
            />
          )
        }
      </Content>
    </Container>
  )
}
