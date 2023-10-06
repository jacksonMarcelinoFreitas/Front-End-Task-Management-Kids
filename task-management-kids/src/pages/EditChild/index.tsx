  import { TitleNavigation } from '../../components/TitleNavigation';
  import { schema } from '../../utils/form-schema-register-child';
  import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
  import { BorderDashed } from '../../components/BorderDashed';
  import { HiTrash } from 'react-icons/hi2';
  import { Button } from '../../components/Button';
  import { Header } from '../../components/Header';
  import { Input } from '../../components/Input';
  import { useNavigate, useParams } from 'react-router-dom';
  import { api } from '../../services/api';
  import { toast } from 'react-toastify';
  import { Container } from './style';
  import { StyledModal } from '../../components/Header/style';
  import { useEffect, useState } from 'react';
  import { useFormik } from 'formik';
  import { confirmDelete } from './confirmDelete';

  import Modal from 'react-modal';
  Modal.setAppElement('#root');

  export function EditChild(){

    const [eyeIsClosed, setEyeIsClosed] = useState(false)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () =>{setModalIsOpen(true)}
    const closeModal = () =>{setModalIsOpen(false)}

    const [initialValues, setInitialValues] = useState({
      age: '',
      name: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    });

    const customModalStyle = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.452)',
      },

      content: {
        position: 'absolute' as 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column' as 'column',
        backgroundColor: 'transparent',
        borderRadius: '16px',
        border: 'none',
      },
    }

    useEffect(()=>{
      async function fetchData() {
        try {
          const response = await api.get(`v1/user/list-child/${id}`);
          const child = response.data;

          setInitialValues({
            age: child.age,
            name: child.name,
            nickname: child.nickname,
            password: '',
            confirmPassword: '',
          });

          setLoading(false);

        } catch (error: any) {
          if (error.response) {
            toast.error('Erro');
          }
        }
      }
      fetchData();

    },[])

    const toggleEye = () => {
      eyeIsClosed ? setEyeIsClosed(false) : setEyeIsClosed(true)
    }

    async function handleDeleteChild(){
      try {
        const response = await api.delete(`/v1/user/delete-child/${id}`);

        if(response.status == 200){
          toast.success('Apagado com sucesso!');
          navigate('/');
        }

      } catch (error: any) {

        if(error.response){
          toast.error('Erro')

        }

      }
    }


    const formik = useFormik({
      initialValues,
      validationSchema: schema,
      enableReinitialize: true,
      onSubmit:
        async (values, { setSubmitting }) => {
        setSubmitting(true);

        const { name, age, nickname, password } = values;

        try{

          await api.put(`/v1/user/update-child/${id}`, {name, age, nickname, password});
          toast.success(`Criança atualizada com sucesso!`);

          navigate(-1);

        }catch(error: any){

          if(error.response){

            if(error.response.data.status === 403){

              toast.error(`${'Problemas de autorização, tente fazer o login novamente!'}`);

            }

            toast.error(`${error.response.data.message}`);

          }else{

            toast.error(`${'Não foi possível cadastrar a criança!'}`);

          }

        }

        setSubmitting(false);
      }},
    );

    return(
      loading ? <div>Loading...</div> : (
        <Container>
          <Header />
          <TitleNavigation
            title='Editar criança'
            titleButton='Voltar'
            onClick={()=> {navigate(`/ManagerChild/${id}`)}}
          />
          <BorderDashed>
            <form onSubmit={formik.handleSubmit}>
              <Input
                type='text'
                name='name'
                placeholder='Mariana'
                label='Nome da criança'
                error={formik.errors.name}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                touched={formik.touched.name}
                onChange={formik.handleChange}
              />
              <Input
                type='text'
                name='nickname'
                label='Nickname'
                placeholder='Mari'
                onBlur={formik.handleBlur}
                error={formik.errors.nickname}
                onChange={formik.handleChange}
                value={formik.values.nickname}
                touched={formik.touched.nickname}
              />
              <Input
                type='number'
                name='age'
                label='Idade'
                placeholder='8'
                onBlur={formik.handleBlur}
                error={formik.errors.age}
                onChange={formik.handleChange}
                value={formik.values.age}
                touched={formik.touched.age}
              />
              <Input
                label='Senha'
                name='password'
                onClick={toggleEye}
                placeholder='************'
                onBlur={formik.handleBlur}
                error={formik.errors.password}
                onChange={formik.handleChange}
                value={formik.values.password}
                touched={formik.touched.password}
                type={eyeIsClosed ? 'text' : 'password'}
                Icon={eyeIsClosed ? AiFillEyeInvisible : AiFillEye}
              />
              <Input
                onClick={toggleEye}
                name='confirmPassword'
                label='Confirme a senha'
                placeholder='************'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.errors.confirmPassword}
                value={formik.values.confirmPassword}
                type={eyeIsClosed ? 'text' : 'password'}
                touched={formik.touched.confirmPassword}
                Icon={eyeIsClosed ? AiFillEyeInvisible : AiFillEye}
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
              <div dangerouslySetInnerHTML={{ __html: confirmDelete }} />
              <div className="box-buttons">
                  <button onClick={closeModal}>Não</button>
                  <button onClick={handleDeleteChild}>Sim</button>
              </div>
            </StyledModal>
          </Modal>

        </Container>
      )
    )
  }