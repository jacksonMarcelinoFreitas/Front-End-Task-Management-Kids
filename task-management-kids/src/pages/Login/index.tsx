import { Container } from './style';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { PasswordStrengthMeter } from '../../components/PasswordStrengthMeter';
import imageLogup from '../../assets/image-logup.svg';
import { MdEmail, MdVpnKey } from  'react-icons/md';
// import { useState } from 'react';
import { schema } from '../../utils/form-schema-login';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

export function Login(){
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { login: '', password: '' },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      try{

        //adicionar chamada da API
        console.log(JSON.stringify(values, null, 2))
        // throw new Error("Isso é um erro forçado!");
      }catch(error){
        toast.error(`${error}`);
      }

      setSubmitting(false);
    },
  })

  return(
      <Container>
          <div>
            <img src={imageLogup} alt="imagem de login"/>
          </div>
          <h1>
            Faça o login!
          </h1>
          <form onSubmit={formik.handleSubmit}>
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
                  Icon={MdVpnKey}
                  error={formik.errors.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  touched={formik.touched.password}
                />
                <PasswordStrengthMeter password={formik.values.password}/>
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