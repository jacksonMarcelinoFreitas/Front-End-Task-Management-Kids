import { Container } from './style';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { ButtonText } from '../../components/ButtonText';

import imageLogin from '../../assets/image-login.svg';

import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from  'react-icons/bs';
import { MdEmail, MdVpnKey } from  'react-icons/md';

import { useState } from 'react';

export function Logup(){
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [term, setTerm] = useState(false);

  const handleLogup = (e: React.FormEvent) => {
    e.preventDefault();

    if(!name || !email || !password){
      alert('Todos os campos precisam ser preenchidos!')
    }

    if(term == false){
      alert('Você precisa ler e aceitar os termos para cadastrar-se!')
    }

  };

  return(
    <Container>
      <div>
        <img src={imageLogin} alt="imagem de login"/>
      </div>
      <h1>
        Cadastre-se!
      </h1>
      <form className='form-container' onSubmit={handleLogup}>
        <Input
          textLabel="Nome completo"
          nameInput="name"
          placeholder="jhonDoe"
          Icon={BsFillPersonFill}
          type="text"
          onChange={e => setName(e.target.value)}
        />
        <Input
          textLabel="E-mail"
          nameInput="email"
          placeholder="jhonDoe@gmail.com"
          Icon={MdEmail}
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          textLabel="Senha"
          nameInput="password"
          placeholder="*************"
          Icon={MdVpnKey}
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Checkbox
          text="Li e concordo com os termos e políticas de privacidade"
          link="#"
          onChange={e => setTerm(e.target.checked)}
        />
        <div className='box-container'>
          <p>*O cadastro deve ser realizado somente por um responsável</p>
          <Button
            value="Enviar"
            type= "button"
            onClick={handleLogup}
          />
          <ButtonText
            value="Fazer login"
            type= "button"
            onClick={() => navigate('/')}
          />
        </div>
      </form>
    </Container>
  )
}