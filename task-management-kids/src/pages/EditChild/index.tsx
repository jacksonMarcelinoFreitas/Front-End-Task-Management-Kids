  import { TitleNavigation } from '../../components/TitleNavigation';
  import { schema } from '../../utils/form-schema-register-child';
  import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
  import { BorderDashed } from '../../components/BorderDashed';
  import { StyledModal } from '../../components/Header/style';
  import { useNavigate, useParams } from 'react-router-dom';
  import { confirmDeleteChild } from './confirmDeleteChild';
  import { customModalStyle } from './confirmDeleteChild';
  import { ThreeDots } from  'react-loader-spinner';
  import { Button } from '../../components/Button';
  import { Header } from '../../components/Header';
  import { Input } from '../../components/Input';
  import { useEffect, useState } from 'react';
  import { HiTrash } from 'react-icons/hi2';
  import { api } from '../../services/api';
  import { toast } from 'react-toastify';

  import { Container } from './style';
  import { useFormik } from 'formik';
  import { IChildData } from './type';

  import Modal from 'react-modal';
  Modal.setAppElement('#root');

  export function EditChild(){

    const [eyeIsClosed, setEyeIsClosed] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const closeModal = () =>{setModalIsOpen(false)}
    const openModal = () =>{setModalIsOpen(true)}
    const navigate = useNavigate();
    const { id } = useParams();

    const [initialValues, setInitialValues] = useState({
      age: '',
      name: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    });

    useEffect(()=>{
      async function fetchData() {
        try {
          setIsLoading(true);
          const response = await api.get(`v1/user/list-child/${id}`);
          const child = response.data;

          setInitialValues({
            password: '',
            age: child.age,
            name: child.name,
            confirmPassword: '',
            nickname: child.nickname,
          });

          setIsLoading(false);


        } catch (error: any) {
          if (error.response) {
            toast.error('Erro');
            setIsLoading(false);
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
        setIsLoading(true);
        const response = await api.delete(`/v1/user/delete-child/${id}`);

        if(response.status == 200){
          toast.success('Apagado com sucesso!');
          navigate('/');
          setIsLoading(false);
        }

      } catch (error: any) {

        if(error.response){
          toast.error('Erro')
          setIsLoading(false);

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

          const requestData: IChildData = {
            name,
            age,
            nickname,
          };

          if (password !== '') {
            requestData.password = password;
          }


          await api.put(`/v1/user/update-child/${id}`, requestData);
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
            titleButton='Voltar'
            title='Editar criança'
            onClick={() => {navigate(`/ManagerChild/${id}`)}}
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
              <div dangerouslySetInnerHTML={{ __html: confirmDeleteChild }} />
              <div className="box-buttons">
                  <button onClick={closeModal}>Não</button>
                  <button onClick={handleDeleteChild}>Sim</button>
              </div>
            </StyledModal>
          </Modal>

        </Container>
        )}
      </div>
    );


  }