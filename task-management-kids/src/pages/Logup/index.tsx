import { PasswordStrengthMeter } from '../../components/PasswordStrengthMeter';
import { CheckboxPrivacyPolicies } from '../../components/PrivacyPolicies';
import { AiFillEye, AiFillEyeInvisible } from  'react-icons/ai';
import { ButtonText } from '../../components/ButtonText';
import { schema } from '../../utils/form-schema-logup';
import imageLogin from '../../assets/image-login.svg';
import { MdEmail } from  'react-icons/md';
import { BsFillPersonFill } from  'react-icons/bs';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Container } from './style';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface UserRegister{
  name: string,
  email: string,
  password: string,
  readTerms: boolean,
}

export function Logup(){
  const navigate = useNavigate();

  const [eyeIsClosed, setEyeIsClosed] = useState(false)

  const toggleEye = () => {
    eyeIsClosed ? setEyeIsClosed(false) : setEyeIsClosed(true)
  }

  const formik = useFormik({
    initialValues:{name: '',email: '',password: '',readTerms: false},
    validationSchema: schema,
    onSubmit:
      async (values, { setSubmitting }) => {
      setSubmitting(true);

      const {name, email, password, readTerms} = values;

      try{

        handleSignUp({name, email, password, readTerms});

      }catch(error){

        toast.error(`${error}`);

      }

      setSubmitting(false);
    },
  })

  const handleSignUp = ({name, email, password, readTerms}: UserRegister) => {
    api.post('/v1/user/sponsor/new-user', {name, email, password, readTerms})

    .then( response => {

        toast.success(response.data.message)
        navigate('/')

    })
    .catch(error => {
        if(error.response){

          toast.error(error.response.data.message)
          console.error(error.response.data)

        }else if(error.request){

          toast.error('Erro de requisição!');
          toast.error(error.request);

        }else{

          toast.error('Não foi possível fazer o cadstro!');
          console.error(error.message);

        }
    });
  }

  return(
    <Container>
      <div>
        <img src={imageLogin} alt='imagem de login'/>
      </div>
      <h1>
        Cadastre-se!
      </h1>
      <form className='form-container' onSubmit={formik.handleSubmit}>
        <Input
          label='Nome completo'
          name='name'
          type='text'
          Icon={BsFillPersonFill}
          placeholder='jhonDoe'
          error={formik.errors.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          touched={formik.touched.name}
        />
        <Input
          label='E-mail'
          name='email'
          type='email'
          Icon={MdEmail}
          placeholder='jhonDoe@gmail.com'
          error={formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          touched={formik.touched.email}
        />
        <Input
          label='Senha'
          name='password'
          Icon={eyeIsClosed ? AiFillEyeInvisible : AiFillEye}
          placeholder='*************'
          type={eyeIsClosed ? 'text' : 'password'}
          error={formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          touched={formik.touched.password}
          onClick={toggleEye}
        />
        <PasswordStrengthMeter password={formik.values.password}/>
        <CheckboxPrivacyPolicies
          text1='termos'
          text2='políticas de privacidade'
          link1='#'
          link2='#'
          name='readTerms'
          error={formik.errors.readTerms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.readTerms}
          touched={formik.touched.readTerms}
        />
        <div className='box-container'>
          <p>*O cadastro deve ser realizado somente por um responsável</p>
          <Button
            value='Enviar'
            type= 'submit'
            disabled={!formik.isValid || formik.isSubmitting}
          />
          <ButtonText
            value='Fazer login'
            type= 'button'
            onClick={() => navigate('/')}
          />
        </div>
      </form>
    </Container>
  )
}