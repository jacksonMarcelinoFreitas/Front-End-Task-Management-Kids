import { Container } from './style';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

import { useNavigate } from "react-router-dom";
import { MdVpnKey } from  'react-icons/md';
import { BiSolidLock } from  'react-icons/bi';


export function ConfirmToken(){
  const navigate = useNavigate();

  return(
    <Container>
      <div className='box-wrapper'>
        <p>
          Informe o seu e-mail para criar a nova senha!!
        </p>

        <div className="box-inputs">
          <Input
            nameInput="token"
            placeholder="TOKEN"
            Icon={MdVpnKey}
            type="text"
          />
          <Input
            nameInput="new password"
            placeholder="nova senha"
            Icon={BiSolidLock}
            type="password"
          />
          <Input
            nameInput="comfirm password"
            placeholder="confirmar senha"
            Icon={BiSolidLock}
            type="password"
          />
        </div>

        <div className="box-buttons">
          <Button
            value="Enviar"
            onClick={() => alert("Botão clicado")}
          />
          <ButtonText
            value="Voltar"
            type='button'
            onClick={() => navigate('/')}
          />
        </div>
      </div>
    </Container>
  )
}