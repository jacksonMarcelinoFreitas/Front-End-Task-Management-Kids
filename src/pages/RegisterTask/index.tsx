import { TitleNavigation } from "../../components/TitleNavigation";
import { BorderDashed } from "../../components/BorderDashed";
import { useNavigate, useParams } from "react-router-dom";
import schema from "../../utils/form-schema-register-task";
import { TextArea } from "../../components/TextArea";
import { AiFillDollarCircle } from 'react-icons/ai';
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Container } from "./style";
import { useFormik } from "formik";

export function RegisterTask(){
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const formik = useFormik(
    {
      initialValues:{
        name: '',
        description: '',
        reward: ''
      },
      validationSchema: schema,
      onSubmit:
        async (values, { setSubmitting }) => {

          setSubmitting(true);

          const { name, description, reward } = values;

          try{

            await api.post(`/v1/task`, {externalIdUserChild: id, name, description, reward});
            toast.success(`Tarefa criada com sucesso!`);
            navigate(`/ManagerChild/${id}`);

          }catch(error: any){
            console.log(error.response.data.message)
            if (error.response) {
              toast.error(error.response.data.message);
              setSubmitting(false);
              if (error.response.status === 403) {
                signOut();
                navigate('/');
              }
            } else {
              toast.error('Não foi possível registrar a tarefa!');
            }

          }

          setSubmitting(false);
      },
    })

  return(
    <Container>
      <Header/>
      <div className="wrapper-container">
        <div className="box-container">
          <TitleNavigation
            titleButton="Voltar"
            title="Cadastrar tarefa"
            onClick={() => navigate(-1)}
          />
          <BorderDashed>
            <form className="form-container" onSubmit={formik.handleSubmit} >
                <Input
                  name="name"
                  type="text"
                  label="Nome da atividade"
                  error={formik.errors.name}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  touched={formik.touched.name}
                  onChange={formik.handleChange}
                  placeholder="Recolher os brinquedos"
                />
                <Input
                  name="reward"
                  type="number"
                  label="Remuneração"
                  placeholder="R$100.00"
                  Icon={AiFillDollarCircle}
                  onBlur={formik.handleBlur}
                  error={formik.errors.reward}
                  value={formik.values.reward}
                  onChange={formik.handleChange}
                  touched={formik.touched.reward}
                />
                <TextArea
                  label="Descrição"
                  name="description"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  error={formik.errors.description}
                  touched={formik.touched.description}
                  placeholder="Ex.: A crinça deve pegar todos os seus brinquedos espalhados pelo espaço, como o quarto ou a sala de brincar, e organizá-los de volta em seus lugares designados. Isso envolve guardar cada brinquedo em seu local apropriado e manter o ambiente arrumado e seguro."
                />
                <Button
                  type="submit"
                  value="Cadastrar"
                  isLoading={formik.isSubmitting}
                  disabled={!formik.isValid || formik.isSubmitting}
                />
            </form>
          </BorderDashed>
        </div>
      </div>
    </Container>
  )
}