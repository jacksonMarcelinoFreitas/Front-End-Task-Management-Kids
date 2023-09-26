import { schema } from '../../utils/form-schema-register-child';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BorderDashed } from '../../components/BorderDashed';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Container } from './style';
import { useState } from 'react';
import { useFormik } from 'formik';

interface ChildRegister{
  confirmPassword?: string,
  age: number | undefined,
  nickname: string,
  password: string,
  name: string,
}

export function RegisterChild(){
  const [eyeIsClosed, setEyeIsClosed] = useState(false)

  const toggleEye = () => {
    eyeIsClosed ? setEyeIsClosed(false) : setEyeIsClosed(true)
  }

  const formik = useFormik({
    initialValues:{
      name:'',
      age: undefined,
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

        handleRegisterChild({name, age, nickname, password});

      }catch(error){
        // if(error.response){

        // }
        toast.error(`${error}`);

      }

      setSubmitting(false);
    },
  })

  async function handleRegisterChild({ name, age, nickname, password }: ChildRegister){

    const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0YXNrLW1hbmFnZW1lbnQiLCJzdWIiOiJtYXRoZXVzam9zZWp1bGlhb0BnbWFpbC5jb20iLCJleHRlcm5hbElkIjoiMzBjY2U2ZmEtNzI0Yy00ODhkLThiMDItOTdjMWQ4ODk4YzNhIiwibmFtZSI6Ik1hdGhldXMgSm9zw6kgSnVsacOjbyIsInJvbGUiOlsiU1BPTlNPUiIsIkNISUxEIl0sImV4cCI6MTY5NTcwNDEwNn0.w7ekv9tYYafCzAb4kr7ztXxLGuEwHkQqNg39C65GVM0"

    api.defaults.headers.common['Authorization'] = token;

    const response = await api.post('/v1/user/child/new-user', {name, age, nickname, password});
    console.log(response.data);

    // const { externalId, name, nickname, age, role } = response.data;

    return response;
  }

  return(
    <Container>
      <Header />
      <div className='title-navigate'>
        <p>Cadastrar criança</p>
        <ButtonText value='Voltar' type='button'/>
      </div>
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
            type='number'
            name='age'
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