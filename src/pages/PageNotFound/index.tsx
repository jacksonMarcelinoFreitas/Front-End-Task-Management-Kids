import not_found from '../../assets/404_error_page.svg';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

export function PageNotFound(){
  const navigate = useNavigate();
  return(
    <Container>
      <div className="wrapper-container">
          <img src={not_found} alt="Not found image" />
          <Button
            className='button'
            value='Voltar'
            type='button'
            onClick={() => navigate('/')}
          />
      </div>
    </Container>
  )
}