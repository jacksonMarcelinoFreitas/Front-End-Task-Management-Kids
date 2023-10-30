import { AiFillEyeInvisible, AiFillEye } from  'react-icons/ai';
import { schema } from '../../utils/form-schema-new-password';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import logupImage from '../../assets/logup.svg';
import { useNavigate } from "react-router-dom";
import { Input } from '../../components/Input';
import { MdVpnKey } from  'react-icons/md';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Container } from './style';
import { useFormik } from 'formik';
import { useState } from 'react';

export function ConfirmToken(){
  const navigate = useNavigate();
  const [eyeIsClosed, setEyeIsClosed] = useState(false);

  const toggleEye = () => {
    eyeIsClosed ? setEyeIsClosed(false) : setEyeIsClosed(true)
  }

  const email = localStorage.getItem("@kidsTasker:email");

  const formik = useFormik(
    {
      initialValues:{token: '', email: '', newPassword: '', confirmPassword: ''},
      validationSchema: schema,
      onSubmit:
        async (values, { setSubmitting }) => {

          setSubmitting(true);

          const { token, newPassword  } = values;

          try{

            const response = await api.post('/v1/auth/new-password', { token, email, newPassword });
            toast.success(`${response.data.message}`);
            navigate("/");

          }catch(error: any){

            if(error.response){
              toast.error(error.response.data.message);
            }else{
              toast.error(`${error}`);
            }

          }
          setSubmitting(false);
      },
    }
  )

  return(
    <Container>
      <img src={logupImage} alt="logup image" />
      <form onSubmit={formik.handleSubmit}>
        <p>
          Informe o seu e-mail para criar a nova senha!!
        </p>
        <div className="box-inputs">
          <Input
            type="text"
            name="token"
            Icon={MdVpnKey}
            placeholder="TOKEN"
            onBlur={formik.handleBlur}
            error={formik.errors.token}
            onChange={formik.handleChange}
            value={formik.values.token}
            touched={formik.touched.token}
          />
          <Input
            name="newPassword"
            placeholder="nova senha"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.errors.newPassword}
            value={formik.values.newPassword}
            touched={formik.touched.newPassword}
            type={eyeIsClosed ? 'text' : 'password'}
            Icon={eyeIsClosed ? AiFillEyeInvisible : AiFillEye}
            onClick={toggleEye}
            />
          <Input
            name="confirmPassword"
            onBlur={formik.handleBlur}
            placeholder="confirmar senha"
            onChange={formik.handleChange}
            error={formik.errors.confirmPassword}
            value={formik.values.confirmPassword}
            type={eyeIsClosed ? 'text' : 'password'}
            touched={formik.touched.confirmPassword}
            Icon={eyeIsClosed ? AiFillEyeInvisible : AiFillEye}
            onClick={toggleEye}
          />
        </div>
        <div className="box-buttons">
          <Button
            type='submit'
            value="Atualizar"
            isLoading={formik.isSubmitting}
            disabled={!formik.isValid || formik.isSubmitting}
          />
          <ButtonText
            type='button'
            value="Voltar"
            onClick={() => navigate('/token')}
          />
        </div>
      </form>
    </Container>
  )
}