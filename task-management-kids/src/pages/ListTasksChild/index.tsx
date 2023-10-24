import noRegistryChild from '../../assets/no-regitry-child.svg';
import { BorderDashed } from '../../components/BorderDashed';
import { CardTask } from '../../components/CardTask';
import { Header } from '../../components/Header';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Container } from './style';
import { IData } from './type';



export function ListTasksChild() {
  const [data, setData] = useState<IData>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [totalValuePerformed, setTotalValuePerfomed] = useState<number>(0);
  const notPerformedTasks = data.filter(task => task.performed === false);
  const performedTasks = data.filter(task => task.performed === true);

  const navigate = useNavigate();
  const { user } = useAuth();

  // useEffect(() => {
  // }, [user]);

  useEffect(() => {
    async function fetchTasks() {

      try {

        setIsLoading(true);
        const response = await api.get(`/v1/task/list-all/${user?.externalId}`);
        const totalValuePerfomedTasks = await api.get(`/v1/task/total-value-tasks-performed/${user?.externalId}`);

        const total: any = Object.values(totalValuePerfomedTasks.data);
        const tasks: any = Object.values(response.data);

        setData(tasks);
        setTotalValuePerfomed(total);
        setIsLoading(false);

        toast.success(response.data.message);

      } catch (error: any) {
        if (error.response) {

          if (error.response.status === 400) {

            toast.error(error.response.data.message);
            setIsLoading(false);

          } else if (error.response.status === 403) {

            toast.error('Você teve problemas de autorização. Faça o login novamente!');
            setIsLoading(false);

          }

        } else {

          toast.error('Não foi possível listar as crianças!');
          setIsLoading(false);

        }

      }

    }

    fetchTasks();
  }, [user]);

  return (
    <div>
      {isLoading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#75E1BA"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={isLoading}
        />) : (
        <Container>
          <Header />
          {(data.length === 0) &&
            <BorderDashed className='border-dashed'>

              <div className='box-container'>

                <img src={noRegistryChild} alt="sem registros de tarefas" />
                <p className='message'>Você ainda não tem tarefas!</p>

              </div>

            </BorderDashed>}
          {(data.length !== 0) &&
            <div className='card-container'>
              <p className='tasks-unperfomed'>Tarefas não realizadas</p>
              <div className="box-not-performed">
                {notPerformedTasks.map(task => (
                  <CardTask
                    Icon={FaEye}
                    textButton='Ver'
                    nameTask={task.name}
                    reward={task.reward}
                    key={task.externalId}
                    value={task.externalId}
                    className='not-performed'
                    onClick={() => { navigate(`/task/${task.externalId}`); }} />
                ))}
              </div>
              <div className="box-title-tasks-perfomed">
                <p className='tasks-perfomed'>Tarefas realizadas</p>
                <div className='total-value'>
                  <p>Valor total:</p>
                  <span>R${totalValuePerformed}</span>
                </div>
              </div>
              <div className="box-performed">
                {performedTasks.map(task => (
                  <CardTask
                    Icon={FaEye}
                    textButton='Ver'
                    nameTask={task.name}
                    reward={task.reward}
                    className='performed'
                    key={task.externalId}
                    value={task.externalId}
                    onClick={() => { navigate(`/task/${task.externalId}`); }} />
                ))}
              </div>
            </div>}
        </Container>
      )}
    </div>
  );
}
