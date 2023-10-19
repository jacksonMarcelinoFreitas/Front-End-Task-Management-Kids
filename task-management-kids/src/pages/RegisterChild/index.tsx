import { TitleNavigation } from '../../components/TitleNavigation';
import { schema } from '../../utils/form-schema-register-child';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BorderDashed } from '../../components/BorderDashed';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Container } from './style';
import { useState } from 'react';
import { useFormik } from 'formik';

export function RegisterChild(){
  const [eyeIsClosed, setEyeIsClosed] = useState(false)
  const navigate = useNavigate();

  const toggleEye = () => {
    eyeIsClosed ? setEyeIsClosed(false) : setEyeIsClosed(true)
  }

  const formik = useFormik({
    initialValues:{
      age: '',
      name:'',
      nickname:'',
      password:'',
      confirmPassword:''
    },
    validationSchema: schema,
    onSubmit:
      async (values, { setSubmitting }) => {
      setSubmitting(true);

      const { name, age, nickname, password } = values;

      try{

        await api.post('/v1/user/child/new-user', {name, age, nickname, password});

        toast.success(`Criança cadastrada com sucesso!`);
        navigate('/');

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

  return(
    <Container>
      <Header />
      <TitleNavigation
        titleButton='Voltar'
        title='Cadastrar criança'
        onClick={() => navigate('/')}
      />
      <BorderDashed>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type='text'
            name='name'
            placeholder='Mariana'
            label='Nome da criança'
            error={formik.errors.name}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            touched={formik.touched.name}
            onChange={formik.handleChange}
          />
          <Input
            type='text'
            name='nickname'
            label='Nickname'
            placeholder='Mari'
            onBlur={formik.handleBlur}
            error={formik.errors.nickname}
            onChange={formik.handleChange}
            value={formik.values.nickname}
            touched={formik.touched.nickname}
          />
          <Input
            name='age'
            type='number'
            label='Idade'
            placeholder='8'
            onBlur={formik.handleBlur}
            error={formik.errors.age}
            onChange={formik.handleChange}
            value={formik.values.age}
            touched={formik.touched.age}
          />
          <Input
            label='Senha'
            name='password'
            onClick={toggleEye}
            placeholder='************'
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            onChange={formik.handleChange}
            value={formik.values.password}
            touched={formik.touched.password}
            type={eyeIsClosed ? 'text' : 'password'}
            Icon={eyeIsClosed ? AiFillEyeInvisible : AiFillEye}
          />
          <Input
            onClick={toggleEye}
            name='confirmPassword'
            label='Confirme a senha'
            placeholder='************'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.errors.confirmPassword}
            value={formik.values.confirmPassword}
            type={eyeIsClosed ? 'text' : 'password'}
            touched={formik.touched.confirmPassword}
            Icon={eyeIsClosed ? AiFillEyeInvisible : AiFillEye}
          />
          <Button
            type='submit'
            value='Cadastrar'
            disabled={!formik.isValid || formik.isSubmitting}
          />
        </form>
      </BorderDashed>

    </Container>
  )
}