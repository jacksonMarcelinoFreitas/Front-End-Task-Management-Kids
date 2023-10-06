import { TitleNavigation } from "../../components/TitleNavigation";
import { BorderDashed } from "../../components/BorderDashed";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../components/Input";
import { toast } from "react-toastify";
import { Container } from "./style";
import { useFormik } from "formik";
import { useState } from "react";
import { AiFillDollarCircle } from 'react-icons/ai';
import { Button } from "../../components/Button";
import schema from "../../utils/form-schema-register-task";
import { TextArea } from "../../components/TextArea";
import { api } from "../../services/api";

export function RegisterTask(){

  const navigate = useNavigate();
  const params = useParams();

  // const [name, setName] = useState(false)

  const formik = useFormik(
    {
      initialValues:{name: '', description: '', reward: '' },
      validationSchema: schema,
      onSubmit:
        async (values, { setSubmitting }) => {

          setSubmitting(true);

          const { name, description, reward } = values;
          // console.log(JSON.stringify(values, null, 2))


          try{

            await api.post(`/v1/task`, {externalIdUserChild: params.id, name, description, reward});
            toast.success(`Tarefa criada com sucesso!`);
            navigate(`/ManagerChild/${params.id}`);


          }catch(error: any){

            if(error.response){

              toast.error(error.response.data.message);

            }

            else{

              toast.error(`${error}`);

            }

          }

          setSubmitting(false);
      },
    })

  return(
    <Container>
      <TitleNavigation
        title="Cadastrar tarefa"
        titleButton="Voltar"
        onClick={() => {navigate(`/ManagerChild/${params.id}`)}}
      />
      <BorderDashed>
        <form className="form-container" onSubmit={formik.handleSubmit} >
          <div className="box-container">
            <Input
              label="Nome da atividade"
              name="name"
              type="text"
              placeholder="Recolher os brinquedos"
              error={formik.errors.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              touched={formik.touched.name}
            />
            <Input
              label="Remuneração"
              name="reward"
              type="number"
              placeholder="R$100.00"
              Icon={AiFillDollarCircle}
              error={formik.errors.reward}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.reward}
              touched={formik.touched.reward}
            />
            <TextArea
              label="Descrição"
              name="description"
              placeholder="Ex.: A crinça deve pegar todos os seus brinquedos espalhados pelo espaço, como o quarto ou a sala de brincar, e organizá-los de volta em seus lugares designados. Isso envolve guardar cada brinquedo em seu local apropriado e manter o ambiente arrumado e seguro."
              error={formik.errors.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              touched={formik.touched.description}
            />
            <Button
              value="Cadastrar"
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            />
          </div>
        </form>
      </BorderDashed>
    </Container>
  )
}