import noRegistryChild from '../../assets/no-regitry-child.svg';
import { BorderDashed } from '../../components/BorderDashed';
import { CardChild } from '../../components/CardChild';
import { Header } from '../../components/Header';
import { Container, CardButton } from './style';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FaUserEdit } from 'react-icons/fa';
import { api } from '../../services/api';
import { TiPlus } from 'react-icons/ti';
import { toast } from 'react-toastify';

type Child = {
  externalId: string;
  nickname: string;
  tasks: number;
  name: string;
  role: string;
  age: number;
  numberTasks: number;
};

type Data = Child[];

export function Home(){
  const navigate = useNavigate();
  const [ data, setData ] = useState<Data>([]);

  useEffect(()=>{
    async function fetchChildren(){

      try {

        const response = await api.get(`/v1/user/list-child`);

        const children: Data = response.data;

        // for (const child of children) {
        //   const tasks = await api.get(`/v1/task/${child.externalId}`);
        //   child.tasks = tasks.data.length;
        // }

        setData(children);

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
            <img src={noRegistryChild} alt="sem registros de crianças" />
            <p className='message'>Você ainda não tem crianças registradas!</p>
            <CardButton onClick={() => navigate('/registerChild')}>
              <TiPlus className='icon-plus'/>
              <p>Adicionar criança</p>
            </CardButton>
          </div>
        </BorderDashed>
      }
      {
        data &&
        <div className='title-navigate'>
          <p>Crianças</p>
        </div>
      }
      {
        data &&
        <div className='card-container'>
          <CardButton onClick={() => navigate('/registerChild')}>
              <TiPlus className='icon-plus'/>
              <p>Adicionar criança</p>
          </CardButton>
          {
            data.map(child => (
              <CardChild
                age={child.age}
                Icon={FaUserEdit}
                tasks={child.numberTasks}
                textButton='Gerenciar'
                nameChild={child.name}
                key={child.externalId}
                value={child.externalId}
                onClick={()=> {}}
              />
            ))
          }
      </div>
    }
    </Container>
  )
}