import { Container } from './style'

interface ISidebarItem{
  Icon?: React.ElementType,
  Text?: string
}

const SidebarItem = ({ Icon, Text }: ISidebarItem) => {
  return (
    <Container>
      {
        Icon&&
        <Icon size={20}/>
      }
      {Text}
    </Container>
  )
}

export default SidebarItem