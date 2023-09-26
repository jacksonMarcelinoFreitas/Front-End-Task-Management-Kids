import { IconType } from "react-icons";
import { Container } from "./style";
import { IoMenu, IoPower } from 'react-icons/io5';
import { useAuth } from '../../hooks/auth';

interface headerTypes{
  icon?: IconType;
}

export function Header({icon, ...rest}: headerTypes){
  const { signOut } = useAuth();

  const openMenu = () => {

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
        onClick={signOut}
      />
    </Container>
  )
}