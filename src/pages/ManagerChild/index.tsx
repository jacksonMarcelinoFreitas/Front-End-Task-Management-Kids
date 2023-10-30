import { TitleNavigation } from '../../components/TitleNavigation';
import { CardManager } from '../../components/CardManager';
import { useNavigate, useParams  } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Container, BoxCards } from './style';

export function ManagerChild(){
  const { id } = useParams();
  const navigate = useNavigate();

  return(
    <Container>
      <Header />
      <div className="wrapper-container">
        <div className="box-container">
          <TitleNavigation
            titleButton='Voltar'
            title='Gerenciar criança'
            onClick={() => navigate('/')}
          />
          <BoxCards>
            <CardManager
              typeCard='edit'
              textCard='Editar criança'
              onClick={() => {navigate(`/EditChild/${id}`)}}
            />
            <CardManager
              typeCard='register'
              textCard='Cadastrar tarefa'
              onClick={() => {navigate(`/RegisterTask/${id}`)}}
            />
            <CardManager
              typeCard='list'
              textCard='Listar tarefas'
              onClick={() => {navigate(`/ListTasksSponsor/${id}`)}}
            />
            <CardManager
              typeCard='start'
              textCard='Iniciar novo ciclo'
              onClick={() => {navigate(`/StartNewCicle/${id}`)}}
            />
          </BoxCards>
        </div>
      </div>
    </Container>
  )
}