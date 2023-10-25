import { PasswordStrengthMeter } from '../../components/PasswordStrengthMeter';
import { CheckboxPrivacyPolicies } from '../../components/PrivacyPolicies';
import { AiFillEye, AiFillEyeInvisible } from  'react-icons/ai';
import { schema } from '../../utils/form-schema-logup';
import imageLogin from '../../assets/image-login.svg';
import { BsFillPersonFill } from  'react-icons/bs';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from  'react-icons/md';
import { api } from '../../services/api';
import { IUserRegister } from './type';
import { toast } from 'react-toastify';
import { Container } from './style';
import { useFormik } from 'formik';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

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

        await new Promise(resolve => setTimeout(resolve, 1000));
        handleSignUp({name, email, password, readTerms});

      }catch(error){

        toast.error(`${error}`);

      }

      setSubmitting(false);
    },
  })

  const handleSignUp = ({ name, email, password, readTerms }: IUserRegister) => {
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
          name='name'
          type='text'
          label='Nome completo'
          placeholder='jhonDoe'
          Icon={BsFillPersonFill}
          error={formik.errors.name}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          touched={formik.touched.name}
          onChange={formik.handleChange}
        />
        <Input
          name='email'
          type='email'
          label='E-mail'
          Icon={MdEmail}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          value={formik.values.email}
          placeholder='jhonDoe@gmail.com'
          onChange={formik.handleChange}
          touched={formik.touched.email}
        />
        <Input
          label='Senha'
          name='password'
          onClick={toggleEye}
          placeholder='*************'
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          onChange={formik.handleChange}
          value={formik.values.password}
          touched={formik.touched.password}
          type={eyeIsClosed ? 'text' : 'password'}
          Icon={eyeIsClosed ? AiFillEyeInvisible : AiFillEye}
        />
        <PasswordStrengthMeter password={formik.values.password}/>
        <CheckboxPrivacyPolicies
          link1='#'
          link2='#'
          text1='termos'
          name='readTerms'
          onBlur={formik.handleBlur}
          text2='políticas de privacidade'
          error={formik.errors.readTerms}
          onChange={formik.handleChange}
          checked={formik.values.readTerms}
          touched={formik.touched.readTerms}
        />
        <div className='box-container'>
          <p>*O cadastro deve ser realizado somente por um responsável</p>
          <Button
            value='Enviar'
            type= 'submit'
            isLoading={formik.isSubmitting}
            disabled={!formik.isValid || formik.isSubmitting}
          />
          <button
            type='button'
            onClick={() => navigate('/')}
          >
            Fazer login
          </button>
        </div>
      </form>
    </Container>
  )
}