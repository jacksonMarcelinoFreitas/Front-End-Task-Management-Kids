import { TitleNavigation } from '../../components/TitleNavigation';
import { BorderDashed } from '../../components/BorderDashed';
import { StyledModal } from '../../components/Header/style';
import { useNavigate, useParams } from 'react-router-dom';
import { InputCheck } from '../../components/InputCheck';
import { confirmDeleteTask } from './confirmDeleteTask';
import { customModalStyle } from './confirmDeleteTask';
import schema from '../../utils/form-schema-edit-task';
import { TextArea } from '../../components/TextArea';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useUserId } from '../../hooks/userId';
import { Input } from '../../components/Input';
import { useEffect, useState } from 'react';
import { HiTrash } from 'react-icons/hi2';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Container } from './style';
import { useFormik } from 'formik';

import Modal from 'react-modal';
import { ThreeDots } from 'react-loader-spinner';
Modal.setAppElement('#root');

export function EditTask(){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const closeModal = () =>{setModalIsOpen(false)}
  const openModal = () =>{setModalIsOpen(true)}
  const { userId } = useUserId();
  const navigate = useNavigate();
  const { id } = useParams();

  const [initialValues, setInitialValues] = useState({
    name: '',
    reward: 0,
    description: '',
    performed: false,
  });

  async function handleDeleteTask(){
    try {
      setIsLoading(true);
      const response = await api.delete(`/v1/task/${id}`);

      if(response.status == 200){
        toast.success('Apagado com sucesso!');
        navigate(`/ListTasksSponsor/${userId}`);
        setIsLoading(false);
      }

    } catch (error: any) {

      if(error.response){
        toast.error('Erro')
        setIsLoading(false);

      }
      setIsLoading(false);

    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit:
      async (values, { setSubmitting }) => {
      setSubmitting(true);

      const { name, reward, description, performed } = values;

      try{

        setIsLoading(true);
        await api.put(`/v1/task/${id}`, { name, reward, description, performed });

        toast.success(`Tarefa atualizada com sucesso!`);

        navigate(`/ListTasksSponsor/${userId}`);
        setIsLoading(false);

      }catch(error: any){

        if(error.response){

          if(error.response.data.status === 403){

            toast.error(`${'Problemas de autorização, tente fazer o login novamente!'}`);
            setIsLoading(false);

          }

          toast.error(`${error.response.data.message}`);
          setIsLoading(false);

        }else{

          toast.error(`${'Não foi possível editar a criança!'}`);
          setIsLoading(false);

        }

      }

      setSubmitting(false);
    }},
  );

  useEffect(()=>{
    async function fetchChild(){
      try {

        setIsLoading(true);
        const response = await api.get(`/v1/task/${id}`);
        const task = response.data;

        setInitialValues({
          name: task.name,
          reward: task.reward,
          description: task.description,
          performed: task.performed,
        });

        setIsLoading(false);

      } catch (error: any) {
        if (error.response) {
          toast.error('Erro');
          setIsLoading(false);
        }
      }

    }

    fetchChild();
  },[])

  return(
    <div>
      {isLoading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#75E1BA"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={isLoading}
        />
      ) : (
        <Container>
          <Header />
          <TitleNavigation
            title='Editar tarefa'
            titleButton='Voltar'
            onClick={() => navigate(`/ListTasksSponsor/${userId}`)}
          />
          <BorderDashed>
            <form onSubmit={formik.handleSubmit}>
              <InputCheck
                id='performed'
                name='performed'
                onBlur={formik.handleBlur}
                text='Marcar como realizada'
                onChange={formik.handleChange}
                error={formik.errors.performed}
                checked={formik.values.performed}
                touched={formik.touched.performed}
              />
              <Input
                type='text'
                name='name'
                label='Nome da atividade'
                error={formik.errors.name}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                touched={formik.touched.name}
                onChange={formik.handleChange}
              />
              <Input
                type='number'
                name='reward'
                label='Remuneração'
                onBlur={formik.handleBlur}
                error={formik.errors.reward}
                value={formik.values.reward}
                onChange={formik.handleChange}
                touched={formik.touched.reward}
              />
              <TextArea
                label='Descrição'
                name='description'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.errors.description}
                value={formik.values.description}
                touched={formik.touched.description}
              />
              <Button
                type='submit'
                value='Editar'
                disabled={!formik.isValid || formik.isSubmitting}
              />
              <Button
                type='button'
                value='Excluir'
                Icon={HiTrash}
                disabled={!formik.isValid || formik.isSubmitting}
                onClick={openModal}
              />
            </form>
          </BorderDashed>
          <Modal
                isOpen={modalIsOpen}
                style={customModalStyle}
                onRequestClose={closeModal}
                contentLabel="Confirmar logout"
          >
            <StyledModal>
              <div dangerouslySetInnerHTML={{ __html: confirmDeleteTask }} />
              <div className="box-buttons">
                  <button onClick={closeModal}>Não</button>
                  <button onClick={handleDeleteTask}>Sim</button>
              </div>
            </StyledModal>
          </Modal>
        </Container>
      )}
    </div>
  )
}