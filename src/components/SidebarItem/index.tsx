import { Container } from './style'

interface ISidebarItem{
  Icon?: React.ElementType,
  Text?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SidebarItem = ({ Icon, Text, onClick}: ISidebarItem) => {
  return (
    <Container onClick={onClick}>
      {
        Icon&&
        <Icon size={20}/>
      }
      {Text}
    </Container>
  )
}

export default SidebarItem