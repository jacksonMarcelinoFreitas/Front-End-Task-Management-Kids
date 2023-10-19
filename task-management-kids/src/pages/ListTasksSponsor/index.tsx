import { TitleNavigation } from '../../components/TitleNavigation';
import noRegistryChild from '../../assets/no-regitry-child.svg';
import { BorderDashed } from '../../components/BorderDashed';
import { useNavigate, useParams  } from 'react-router-dom';
import { CardTask } from '../../components/CardTask';
import { Header } from '../../components/Header';
import { Container, CardButton } from './style';
import { useState, useEffect } from "react";
import { FaUserEdit } from 'react-icons/fa';
import { api } from '../../services/api';
import { TiPlus } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { IData } from './type';


export function ListTasksSponsor(){
  const [ data, setData ] = useState<IData>([]);

  const [ totalValuePerformed, setTotalValuePerfomed ] = useState<number>(0.00);
  const notPerformedTasks = data.filter(task => task.performed === false);
  const performedTasks = data.filter(task => task.performed === true);

  const{ id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    async function fetchChildren(){

      try {

        const response = await api.get(`/v1/task/list-all/${id}`);
        const totalValuePerfomedTasks = await api.get(`/v1/task/total-value-tasks-performed/${id}`)

        const total: any = Object.values(totalValuePerfomedTasks.data);
        const tasks: any = Object.values(response.data);

        setData(tasks);
        setTotalValuePerfomed(total);

        toast.success(response.data.message);

      } catch (error: any) {
        if(error.response){

          if(error.response.status === 400){

            toast.error(error.response.data.message)

          }else if(error.response.status === 403){

            toast.error('Você teve problemas de autorização. Faça o login novamente!')

          }

        }else{

          toast.error('Não foi possível listar as crianças!');

        }

      }

    }

    fetchChildren();
  },[])

  return(
    <Container>
      <Header />
      <TitleNavigation
        titleButton='Voltar'
        onClick={()=> navigate(`/ManagerChild/${id}`)}
      />
      {
        (data.length === 0) &&
        <BorderDashed className='border-dashed' >

          <div className='box-container'>

            <img src={noRegistryChild} alt="sem registros de tarefas" />
            <p className='message'>Você ainda não registrou tarefas para esta criança!</p>

            <CardButton onClick={() => navigate(`/RegisterTask/${id}`)}>
              <TiPlus className='icon-plus'/>
              <p>Adicionar tarefa</p>
            </CardButton>

          </div>

        </BorderDashed>
      }
      {
        (data.length !== 0) &&
        <div className='card-container'>
          <CardButton onClick={() => navigate(`/RegisterTask/${id}`)}>
              <TiPlus className='icon-plus'/>
              <p>Adicionar tarefa</p>
          </CardButton>
          <p className='tasks-unperfomed'>Tarefas não realizadas</p>
          <div className="box-not-performed">
            {
              notPerformedTasks.map(task => (
                <CardTask
                  Icon={FaUserEdit}
                  textButton='Editar'
                  nameTask={task.name}
                  reward={task.reward}
                  key={task.externalId}
                  value={task.externalId}
                  className='not-performed'
                  onClick={() => {navigate(`/EditTask/${task.externalId}`)}}
                />
              ))
            }
          </div>
          <div className="box-title-tasks-perfomed">
            <p className='tasks-perfomed'>Tarefas realizadas</p>
            <div className='total-value'>
              <p>Valor total:</p>
              <span>R${totalValuePerformed}</span>
            </div>
          </div>
          <div className="box-performed">
            {
              performedTasks.map(task => (
                <CardTask
                  Icon={FaUserEdit}
                  textButton='Editar'
                  nameTask={task.name}
                  reward={task.reward}
                  className='performed'
                  key={task.externalId}
                  value={task.externalId}
                  onClick={() => {navigate(`/EditTask/${task.externalId}`)}}
                />
              ))
            }
          </div>
        </div>
    }
    </Container>
  )
}