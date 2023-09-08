import { Container } from './style';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { ButtonText } from '../../components/ButtonText';

import imageLogin from '../../assets/image-login.svg';

import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from  'react-icons/bs';
import { MdEmail, MdVpnKey } from  'react-icons/md';

export function Logup(){
  const navigate = useNavigate();

  return(
    <Container>
      <div>
        <img src={imageLogin} alt="imagem de login"/>
      </div>
      <h1>
        Cadastre-se!
      </h1>
      <div className='input-container'>
        <Input
          textLabel="Nome completo"
          nameInput="name"
          placeholder="jhonDoe"
          Icon={BsFillPersonFill}
          type="text"
        />
        <Input
          textLabel="E-mail"
          nameInput="email"
          placeholder="jhonDoe@gmail.com"
          Icon={MdEmail}
          type="email"
        />
        <Input
          textLabel="Senha"
          nameInput="password"
          placeholder="*************"
          Icon={MdVpnKey}
          type="password"
        />
        <Checkbox
          text='Li e concordo com os termos e políticas de privacidade'
        />
        <div className='box-container'>
          <p>*O cadastro deve ser realizado somente por um responsável</p>
          <Button
            value="Enviar"
            onClick={() => alert("Botão clicado")}
          />
          <ButtonText
            value="Fazer login"
            onClick={() => navigate('/')}
          />
        </div>


      </div>
    </Container>
  )
}