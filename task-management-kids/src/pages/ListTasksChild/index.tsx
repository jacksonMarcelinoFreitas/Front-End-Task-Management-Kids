import noRegistryChild from '../../assets/no-regitry-child.svg';
import { BorderDashed } from '../../components/BorderDashed';
import { useNavigate  } from 'react-router-dom';
import { CardTask } from '../../components/CardTask';
import { Header } from '../../components/Header';
import { Container } from './style';
import { useState, useEffect } from "react";
import { api } from '../../services/api';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { IData, ITask } from './type';


export function ListTasksChild(){
  const [ data, setData ] = useState<IData>([]);

  const [ totalValuePerformed, setTotalValuePerfomed ] = useState<number>(0.00);
  const notPerformedTasks = data.filter(task => task.performed === false);
  const performedTasks = data.filter(task => task.performed === true);

  const navigate = useNavigate();


  useEffect(() => {
    const teste = [
    {
      name: "Jackson Freitas",
      reward: 12,
      performed: true,
      externalId: "teste_id",
      description: "teste description",
    },
    {
      name: "Ana Freitas",
      reward: 14,
      performed: false,
      externalId: "teste_id1",
      description: "teste description",
    },
    {
      name: "Marco Freitas",
      reward: 16,
      performed: false,
      externalId: "teste_id2",
      description: "teste description",
    },
  ]
    setData(teste);
  }, []);


  // useEffect(()=>{
  //   async function fetchChildren(){

  //     try {

  //       const response = await api.get(`/v1/task/list-all/${id}`);
  //       const totalValuePerfomedTasks = await api.get(`/v1/task/total-value-tasks-performed/${id}`)

  //       const total: any = Object.values(totalValuePerfomedTasks.data);
  //       const tasks: any = Object.values(response.data);

  //       setData(tasks);
  //       setTotalValuePerfomed(total);

  //       toast.success(response.data.message);

  //     } catch (error: any) {
  //       if(error.response){

  //         if(error.response.status === 400){

  //           toast.error(error.response.data.message)

  //         }else if(error.response.status === 403){

  //           toast.error('Você teve problemas de autorização. Faça o login novamente!')

  //         }

  //       }else{

  //         toast.error('Não foi possível listar as crianças!');

  //       }

  //     }

  //   }

  //   fetchChildren();
  // },[])
  return(
    <Container>
      <Header />
      {
        (data.length === 0) &&
        <BorderDashed className='border-dashed' >

          <div className='box-container'>

            <img src={noRegistryChild} alt="sem registros de tarefas" />
            <p className='message'>Você ainda não tem tarefas!</p>

          </div>

        </BorderDashed>
      }
      {
        (data.length !== 0) &&
        <div className='card-container'>
          <p className='tasks-unperfomed'>Tarefas não realizadas</p>
          <div className="box-not-performed">
            {
              notPerformedTasks.map(task => (
                <CardTask
                  Icon={FaEye}
                  textButton='Ver'
                  nameTask={task.name}
                  reward={task.reward}
                  key={task.externalId}
                  value={task.externalId}
                  className='not-performed'
                  onClick={() => {navigate(`/task/${task.externalId}`)}}
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
                  Icon={FaEye}
                  textButton='Ver'
                  nameTask={task.name}
                  reward={task.reward}
                  className='performed'
                  key={task.externalId}
                  value={task.externalId}
                  onClick={() => {navigate(`/task/${task.externalId}`)}}
                />
              ))
            }
          </div>
        </div>
    }
    </Container>
  )
}