import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ButtonText } from '../../components/ButtonText';
import { schema } from '../../utils/form-schema-login';
import imageLogup from '../../assets/image-logup.svg';
import { MdEmail } from  'react-icons/md';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { toast } from 'react-toastify';
import { Container } from './style';
import { useFormik } from 'formik';
import { useState } from 'react';


interface UserLogin{
  login: string,
  password: string,
}


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
        // console.log(JSON.stringify(values, null, 2))

        try{

          const response = handleSignIn({login, password})

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

  const handleSignIn = ({login , password}: UserLogin) => {
    signIn({login, password});
  }

  return(
      <Container>
          <div>
            <img src={imageLogup} alt="imagem de login"/>
          </div>
          <h1>
            Faça o login!
          </h1>
          <form className='form-container' onSubmit={formik.handleSubmit}>
            <div className='box-container'>
              <Input
                label="Login"
                name="login"
                type="text"
                placeholder="jhonDoe@gmail.com or nickname"
                Icon={MdEmail}
                error={formik.errors.login}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.login}
                touched={formik.touched.login}
              />

              <div className='input-password'>
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="*************"
                  Icon={eyeIsClosed ? AiFillEyeInvisible : AiFillEye}
                  onClick={toggleEye}
                  error={formik.errors.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  touched={formik.touched.password}
                />
              </div>
              <Button
                value="Enviar"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              />
              <div className='box-buttons'>
                <ButtonText
                  value="Esqueci a senha!"
                  type="button"
                  onClick={() => navigate('/register')}
                />
                <ButtonText
                  value="Cadastre-se!"
                  type="button"
                  onClick={() => navigate('/register')}
                />
              </div>
            </div>
        </form>
    </Container>
  )
}