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

type Task = {
  externalId: string;
  reward: number;
  name: string;
};

type Data = Task[];

export function TasksChild(){
  const params = useParams();
  const navigate = useNavigate();
  const [ data, setData ] = useState<Data>([]);

  useEffect(()=>{
    async function fetchChildren(){

      try {

        const response = await api.get(`/v1/task/${params.id}`);

        const tasks: Data = response.data;

        console.log(tasks);

        setData(tasks);

        toast.success(response.data.message);

      } catch (error: any) {
        if(error.response){

          if(error.response.status === 400){

            toast.error(error.response.data.message)

          }else if(error.response.status === 403){

            toast.error('Você teve problemas de autorização. Faça o login novamente!')

          }

        }else{

          toast.error('Não foi possível registrar a criança!');

        }

      }

    }

    fetchChildren();
  },[])

  return(
    <Container>

      <Header />
      {
        !data &&
        <BorderDashed className='border-dashed' >
          <div className='box-container'>
            <img src={noRegistryChild} alt="sem registros de tarefas" />
            <p className='message'>Você ainda não registrou tarefas para esta criança!</p>
            <CardButton onClick={() => navigate(`/RegisterTask/${params.id}`)}>
              <TiPlus className='icon-plus'/>
              <p>Adicionar tarefa</p>
            </CardButton>
          </div>
        </BorderDashed>
      }
      {
        data &&
        <TitleNavigation
          title='Tarefas'
        />
      }
      {
        data &&
        <div className='card-container'>
          {/* <CardButton onClick={() => navigate(`/RegisterTask/${params.id}`)}>
              <TiPlus className='icon-plus'/>
              <p>Adicionar tarefa</p>
          </CardButton> */}
          {
            data.map(task => (
              <CardTask
                Icon={FaUserEdit}
                textButton='Editar'
                nameTask={task.name}
                reward={task.reward}
                key={task.externalId}
                value={task.externalId}
                onClick={() => {navigate(`/EditTask/${task.externalId}`)}}
              />
            ))
          }
        </div>
    }
    </Container>
  )
}