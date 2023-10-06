import { TitleNavigation } from '../../components/TitleNavigation';
import noRegistryChild from '../../assets/no-regitry-child.svg';
import { BorderDashed } from '../../components/BorderDashed';
import { useNavigate } from 'react-router-dom';
import { CardChild } from '../../components/CardChild';
import { Header } from '../../components/Header';
import { Container, CardButton } from './style';
import { useState, useEffect } from "react";
import { FaUserEdit } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

type Child = {
  numberTasks: number;
  externalId: string;
  nickname: string;
  tasks: number;
  name: string;
  role: string;
  age: number;
};

type Data = Child[];

export function Home(){
  const navigate = useNavigate();
  const [ data, setData ] = useState<Data>([]);

  async function fetchChildren(){

    try {

      const response = await api.get('/v1/user/list-child');
      const children = response.data;

      setData(children);

    } catch (error: any) {

      toast.error('Você teve problemas de autorização. Faça o login novamente!')

    }

  }

  useEffect(()=>{

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
        <TitleNavigation
          title='Crianças'
        />
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
                onClick={() => {navigate(`/ManagerChild/${child.externalId}`)}}
              />
            ))
          }
        </div>
    }
    </Container>
  )
}