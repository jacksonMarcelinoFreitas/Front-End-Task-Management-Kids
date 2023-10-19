import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from "react-router-dom";
import { BiSolidLock } from  'react-icons/bi';
import { MdVpnKey } from  'react-icons/md';
import { Container } from './style';

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
            type="text"
            name="token"
            Icon={MdVpnKey}
            placeholder="TOKEN"
          />
          <Input
            type="password"
            Icon={BiSolidLock}
            name="new password"
            placeholder="nova senha"
          />
          <Input
            type="password"
            Icon={BiSolidLock}
            name="comfirm password"
            placeholder="confirmar senha"
          />
        </div>

        <div className="box-buttons">
          <Button
            value="Enviar"
            onClick={() => alert("Botão clicado")}
          />
          <ButtonText
            type='button'
            value="Voltar"
            onClick={() => navigate('/')}
          />
        </div>
      </div>
    </Container>
  )
}