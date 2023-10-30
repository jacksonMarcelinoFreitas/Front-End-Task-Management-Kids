import send_token_image from '../../assets/send-token.svg';
import { ButtonText } from '../../components/ButtonText';
import { schema } from '../../utils/form-schema-token';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from "react-router-dom";
import { MdEmail } from  'react-icons/md';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Container } from './style';
import { useFormik } from 'formik';

export function SendToken(){
  const navigate = useNavigate();

  const formik = useFormik(
    {
      initialValues:{email: ''},
      validationSchema: schema,
      onSubmit:
        async (values, { setSubmitting }) => {

          setSubmitting(true);

          const { email } = values;

          try{

            const response = await api.post('/v1/auth/send-token', { email });
            localStorage.setItem("@kidsTasker:email", email);
            toast.success(`${response.data.message}`);
            navigate("/newPassword");

          }catch(error: any){

            if(error.response){
              toast.error(error.response.data.message);
            }else{
              toast.error(`${error}`);
            }

          }
          setSubmitting(false);
      },
    })

  return(
    <Container>
        <img src={send_token_image} alt="send token image" />
        <form onSubmit={formik.handleSubmit}>
          <p>
            Informe o seu e-mail para criar a nova senha!!
          </p>
          <div className="box-inputs">
            <Input
              name="email"
              type="email"
              Icon={MdEmail}
              placeholder="jhonDoe@gmail.com"
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              onChange={formik.handleChange}
              value={formik.values.email}
              touched={formik.touched.email}
            />
          </div>

          <div className="box-buttons">
            <Button
              type='submit'
              value="Enviar"
              isLoading={formik.isSubmitting}
              disabled={!formik.isValid || formik.isSubmitting}
            />
            <ButtonText
              type='button'
              value="Voltar"
              onClick={() => navigate('/')}
            />
          </div>
        </form>
    </Container>
  )
}