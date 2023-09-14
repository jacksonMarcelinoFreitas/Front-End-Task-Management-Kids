import { Container } from './style';
// import { ToastMessage } from '../../components/Toast/index';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { ButtonText } from '../../components/ButtonText';

import imageLogup from '../../assets/image-logup.svg';

import { useNavigate } from "react-router-dom";
import { MdEmail, MdVpnKey } from  'react-icons/md';

import { useState } from 'react';

import { toast } from 'react-toastify';
import { PrimeReactProvider } from 'primereact/api';


export function Login(){
  const navigate = useNavigate();

  // const [toastVisible, setToastVisible] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState<string>("");

  async function handleLogin(e: React.FormEvent){
    e.preventDefault();

    if(!login || !password){
      toast.warn('Todos os campos precisam ser preenchidos!');
    }

  };



  return(
    <PrimeReactProvider>
      <Container>
        {/* <ToastContainer /> */}
        <div>
          <img src={imageLogup} alt="imagem de login"/>
        </div>
        <h1>
          Faça o login!
        </h1>
          <form className='form-container' onSubmit={handleLogin}>
              <InputPassword />
              <Input
                textLabel="Login"
                nameInput="login"
                placeholder="jhonDoe@gmail.com or nickname"
                Icon={MdEmail}
                type="text"
                onChange={e => setLogin(e.target.value)}
              />
              <Input
                textLabel="Senha"
                nameInput="password"
                placeholder="*************"
                Icon={MdVpnKey}
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <div className='box-container'>
                <Button
                  value="Enviar"
                  type="button"
                  onClick={handleLogin}
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
  </PrimeReactProvider>

  )
}