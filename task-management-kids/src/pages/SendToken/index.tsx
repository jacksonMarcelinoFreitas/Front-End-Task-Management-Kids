import { Container } from './style';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

import { useNavigate } from "react-router-dom";
import { MdEmail } from  'react-icons/md';

export function SendToken(){
  const navigate = useNavigate();

  return(
    <Container>
      <div className='box-wrapper'>
        <p>
          Informe o seu e-mail para criar a nova senha!!
        </p>

        <div className="box-inputs">
          <Input
            name="email"
            placeholder="jhonDoe@gmail.com"
            Icon={MdEmail}
            type="email"
          />
        </div>

        <div className="box-buttons">
          <Button
            value="Enviar"
            type='button'
            onClick={() => navigate("/newPassword")}
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