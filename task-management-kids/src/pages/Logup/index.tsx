import { Container } from './style';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { CheckboxPrivacyPolicies } from '../../components/PrivacyPolicies';
import { ButtonText } from '../../components/ButtonText';

import imageLogin from '../../assets/image-login.svg';

import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from  'react-icons/bs';
import { MdEmail, MdVpnKey } from  'react-icons/md';
import { schema } from '../../utils/form-schema-logup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');


export function Logup(){
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', read_terms: false},
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
        <img src={imageLogin} alt="imagem de login"/>
      </div>
      <h1>
        Cadastre-se!
      </h1>
      <form className='form-container' onSubmit={formik.handleSubmit}>
        <Input
          label="Nome completo"
          name="name"
          type="text"
          Icon={BsFillPersonFill}
          placeholder="jhonDoe"
          error={formik.errors.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          touched={formik.touched.name}
        />
        <Input
          label="E-mail"
          name="email"
          type="email"
          Icon={MdEmail}
          placeholder="jhonDoe@gmail.com"
          error={formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          touched={formik.touched.email}
        />
        <Input
          label="Senha"
          name="password"
          Icon={MdVpnKey}
          placeholder="*************"
          type="password"
          error={formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          touched={formik.touched.password}
        />
        <CheckboxPrivacyPolicies
          text1="termos"
          text2="políticas de privacidade"
          link1="#"
          link2="#"
          name='read_terms'
          error={formik.errors.read_terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.read_terms}
          touched={formik.touched.read_terms}
        />
        <div className='box-container'>
          <p>*O cadastro deve ser realizado somente por um responsável</p>
          <Button
            value="Enviar"
            type= "submit"
            disabled={!formik.isValid || formik.isSubmitting}
          />
          <ButtonText
            value="Fazer login"
            type= "button"
            onClick={() => navigate('/')}
          />
        </div>
      </form>
    </Container>
  )
}