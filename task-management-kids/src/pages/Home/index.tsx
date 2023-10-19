import { TitleNavigation } from '../../components/TitleNavigation';
import noRegistryChild from '../../assets/no-regitry-child.svg';
import { BorderDashed } from '../../components/BorderDashed';
import { CardChild } from '../../components/CardChild';
import { Header } from '../../components/Header';
import { Container, CardButton } from './style';
import { useNavigate } from 'react-router-dom';
import { useUserId } from '../../hooks/userId';
import { useState, useEffect } from "react";
import { FaUserEdit } from 'react-icons/fa';
import { api } from '../../services/api';
import { TiPlus } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { IData } from './type';

export function Home(){
  const navigate = useNavigate();
  const { setUserId } = useUserId();
  const [ data, setData ] = useState<IData>([]);

  function handleClickChild(idChild: string){
    setUserId(idChild);
    navigate(`/ManagerChild/${idChild}`)
  }

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
      <TitleNavigation
        title='Crianças'
      />
      {
        (data.length === 0) &&
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
        (data.length !== 0) &&
        <div className='card-container'>
          <CardButton onClick={() => navigate('/registerChild')}>
              <TiPlus className='icon-plus'/>
              <p>Adicionar criança</p>
          </CardButton>
          <div className="box-card">
            {
              data.map(child => (
                <CardChild
                  age={child.age}
                  Icon={FaUserEdit}
                  textButton='Gerenciar'
                  nameChild={child.name}
                  key={child.externalId}
                  value={child.externalId}
                  tasks={child.numberTasks}
                  onClick={() => handleClickChild(child.externalId)}
                />
              ))
            }
          </div>
        </div>
      }
    </Container>
  )
}