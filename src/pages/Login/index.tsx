import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { schema } from '../../utils/form-schema-login';
import imageLogin from '../../assets/login.svg';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { MdEmail } from  'react-icons/md';
import { useAuth } from '../../hooks/auth';
import { toast } from 'react-toastify';
import { Container } from './style';
import { IUserLogin } from './type';
import { useFormik } from 'formik';
import { useState } from 'react';

export function Login(){
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [eyeIsClosed, setEyeIsClosed] = useState(false)

  const toggleEye = () => {
    eyeIsClosed ? setEyeIsClosed(false) : setEyeIsClosed(true)
  }

  const formik = useFormik(
  {
    initialValues:{login: '', password: ''},
    validationSchema: schema,
    onSubmit:
      async (values, { setSubmitting }) => {

        setSubmitting(true);

        const { login, password } = values;

        try{

          await new Promise(resolve => setTimeout(resolve, 1000));
          handleSignIn({login, password})

        }catch(error: any){

          if(error.response){
              if(error.response == 403){
                toast.error(error.response.data.message);
              }
          }

          else{
            toast.error(`${error}`);

          }

        }

        setSubmitting(false);
    },
  })

  const handleSignIn = ({login , password}: IUserLogin) => {
    signIn({login, password});
  }

  return(
      <Container>
        <img src={imageLogin} alt="imagem de login"/>
        <form className='form-container' onSubmit={formik.handleSubmit}>
          <h1>
            Faça o login!
          </h1>
          <div className='box-container'>
            <Input
              type="text"
              name="login"
              label="Login"
              Icon={MdEmail}
              onBlur={formik.handleBlur}
              error={formik.errors.login}
              value={formik.values.login}
              touched={formik.touched.login}
              onChange={formik.handleChange}
              placeholder="jhonDoe@gmail.com or nickname"
            />
            <Input
              name="password"
              label="Password"
              onClick={toggleEye}
              placeholder="*************"
              onBlur={formik.handleBlur}
              error={formik.errors.password}
              onChange={formik.handleChange}
              value={formik.values.password}
              touched={formik.touched.password}
              type={eyeIsClosed ? 'text' : 'password'}
              Icon={eyeIsClosed ? AiFillEyeInvisible : AiFillEye}
            />
            <Button
              type="submit"
              value="Enviar"
              isLoading={formik.isSubmitting}
              disabled={!formik.isValid || formik.isSubmitting}
            />
            <div className='box-buttons'>
              <button
                type='button'
                onClick={() => navigate('/token')}
              >
                Esqueci a senha!
              </button>
              <button
                type='button'
                onClick={() => navigate('/register')}
              >
                Cadastre-se!
              </button>
            </div>
          </div>
        </form>
    </Container>
  )
}