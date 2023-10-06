import { TitleNavigation } from '../../components/TitleNavigation';
import { schema } from '../../utils/form-schema-register-child';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BorderDashed } from '../../components/BorderDashed';
// import { ButtonText } from '../../components/ButtonText';
import { HiTrash } from 'react-icons/hi2';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Container } from './style';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

interface Task {
  externalId: string;
  name: string;
  reward: number;
  description: string;
  performed: boolean;
  createdDate: string;
}

type Data = Task[];


export function EditTask(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [eyeIsClosed, setEyeIsClosed] = useState(false)
  const [data, setData ] = useState<Data>([]);


  const handleBack = () => {
    navigate(-1);
  }

  const toggleEye = () => {
    eyeIsClosed ? setEyeIsClosed(false) : setEyeIsClosed(true)
  }

  const formik = useFormik({
    initialValues:{
      name:'',
      reward:'',
      description:'',
      performed:''
    },
    validationSchema: schema,
    onSubmit:
      async (values, { setSubmitting }) => {
      setSubmitting(true);

      const { name, reward, description, performed } = values;

      try{

        await api.post('/v1/user/child/new-user', { name, reward, description, performed });

        toast.success(`Criança cadastrada com sucesso!`);

        navigate(-1);

      }catch(error: any){

        if(error.response){

          if(error.response.data.status === 403){

            toast.error(`${'Problemas de autorização, tente fazer o login novamente!'}`);

          }

          toast.error(`${error.response.data.message}`);

        }else{

          toast.error(`${'Não foi possível cadastrar a criança!'}`);

        }

      }

      setSubmitting(false);
    }},
  );

  useEffect(()=>{
    async function fetchChild(){

      try {

        const response = await api.get(`/v1/task/${id}`);

        const task: Data = response.data;

        setData(task);

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

    fetchChild();
  },[])

  return(
    <Container>
      <Header />
      <TitleNavigation
        title='Editar tarefa'
        titleButton='Voltar'
        onClick={handleBack}
      />
      <BorderDashed>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type='text'
            name='name'
            label='Nome da atividade'
            error={formik.errors.name}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            touched={formik.touched.name}
            onChange={formik.handleChange}
          />
          <Input
            type='number'
            name='reward'
            label='Remuneração'
            error={formik.errors.reward}
            value={formik.values.reward}
            onBlur={formik.handleBlur}
            touched={formik.touched.reward}
            onChange={formik.handleChange}
          />
          <Input
            type='text'
            name='description'
            label='Descrição'
            error={formik.errors.description}
            value={formik.values.description}
            onBlur={formik.handleBlur}
            touched={formik.touched.description}
            onChange={formik.handleChange}
          />
          <Button
            type='submit'
            value='Editar'
            disabled={!formik.isValid || formik.isSubmitting}
          />
          <Button
            type='button'
            value='Excluir'
            Icon={HiTrash}
            disabled={!formik.isValid || formik.isSubmitting}
          />
        </form>
      </BorderDashed>

    </Container>
  )
}