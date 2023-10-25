import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from "react-router-dom";
import { MdEmail } from  'react-icons/md';
import { Container } from './style';

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
            type="email"
            Icon={MdEmail}
            placeholder="jhonDoe@gmail.com"
          />
        </div>

        <div className="box-buttons">
          <Button
            type='button'
            value="Enviar"
            onClick={() => navigate("/newPassword")}
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