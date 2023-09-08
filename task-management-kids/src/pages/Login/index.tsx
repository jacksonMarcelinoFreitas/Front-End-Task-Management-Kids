import { Container } from './style';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

import imageLogup from '../../assets/image-logup.svg';

import { useNavigate } from "react-router-dom";
import { MdEmail, MdVpnKey } from  'react-icons/md';

export function Login(){
  const navigate = useNavigate();

  return(
    <Container>
      <div>
        <img src={imageLogup} alt="imagem de login"/>
      </div>
      <h1>
        Faça o login!
      </h1>
      <div className='input-container'>
        <Input
          textLabel="Login"
          nameInput="login"
          placeholder="jhonDoe@gmail.com or nickname"
          Icon={MdEmail}
          type="text"
        />
        <Input
          textLabel="Senha"
          nameInput="password"
          placeholder="*************"
          Icon={MdVpnKey}
          type="password"
        />
        <div className='box-container'>
          <Button
            value="Enviar"
            onClick={() => alert("Botão clicado")}
          />
          <div className='box-buttons'>
            <ButtonText
              value="Esqueci a senha!"
              onClick={() => navigate('/token')}
            />
            <ButtonText
              value="Cadastre-se!"
              onClick={() => navigate('/register')}
            />
          </div>
        </div>


      </div>
    </Container>
  )
}