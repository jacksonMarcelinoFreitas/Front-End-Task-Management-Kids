import { Container } from "./style";
import warning from "../../assets/warning.svg";
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useUserId } from "../../hooks/userId";
import { api } from "../../services/api";
import { toast } from 'react-toastify';

export function StartNewCicle(){
  const navigate = useNavigate();
  const { userId } = useUserId();
  const { id } = useParams();

  const formik = useFormik({
    initialValues:{
      reuseTasks: "sim"
    },
    enableReinitialize: true,
    onSubmit:
      async (values, { setSubmitting }) => {
      setSubmitting(true);

      const { reuseTasks } = values;

      let isReused = true;

      reuseTasks === "sim" ? isReused = true : isReused = false

      try{

        const response = await api.post(`/v1/task/new-cicle`, {externalIdUserChild: userId, reuseTasks: isReused});
        toast.success(`${response.data.message}`);
        navigate('/');

      }catch(error: any){

        if(error.response){

          if(error.response.data.status === 403){

            toast.error(`${'Problemas de autorização, tente fazer o login novamente!'}`);

          }

          toast.error(`${error.response.data.message}`);

        }else{

          toast.error(`${'Não foi possível editar a criança!'}`);

        }

      }

      setSubmitting(false);
    }},
  );
  return(
    <Container>
      <img src={warning} alt="warning image" />
      <form onSubmit={formik.handleSubmit}>
        <div className="box-content">
          <h1>Você deseja reutilizar tarefas?</h1>
          <div className="box-options">
            <p>Esta opção:</p>
            <div className="box-alert">
              <p><span>&bull;</span> move todas as tarefas para a lista de não  realizadas</p>
              <p><span>&bull;</span> zera o valor total de ganhos</p>
            </div>
          </div>
          <div className="box-inputs">
            <div className="box-input">
            <input
              type="radio"
              name="reuseTasks"
              value="sim"
              id="reuse"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              defaultChecked={formik.values.reuseTasks === "sim"}
            />
            <label htmlFor="reuse">Sim</label><br/>
            <input
              type="radio"
              name="reuseTasks"
              value="nao"
              id="unreuse"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              defaultChecked={formik.values.reuseTasks === "nao"}
            />
            <label htmlFor="unreuse">Não</label><br/>
            </div>
          </div>
          <Button
            value="Confirmar"
            type="submit"
            isLoading={formik.isSubmitting}
            disabled={!formik.isValid || formik.isSubmitting}
          />
          <ButtonText
            value="Voltar"
            type="button"
            onClick={() => navigate(`/ManagerChild/${id}`)}
          />
        </div>
      </form>
    </Container>
  )
}