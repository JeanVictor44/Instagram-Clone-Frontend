import { Link } from 'react-router-dom';
import { Container } from './style';

export function Footer(){
  return (    
    <Container>
      <ul>
        <li><Link to="">Meta</Link></li>
        <li><Link to='/about'>Sobre</Link></li>
        <li><Link to=''>Blog</Link></li>
        <li><Link to=''>Carreiras</Link></li>
        <li><Link to=''>Ajuda</Link></li>
        <li><Link to=''>API</Link></li>
        <li><Link to=''>Privacidade</Link></li>
        <li><Link to=''>Termos</Link></li>
        <li><Link to=''>Principais contas</Link></li>
        <li><Link to=''>Localizações</Link></li>
        <li><Link to=''>Instagram Lite</Link></li>
        <li><Link to=''>Carregamento de contatos e não usuários</Link></li>
      </ul>
      <div className='footer-bottom'>
        <span>Português (Brasil)</span>
        <span>© 2023 Instagram from Meta</span>
      </div>
    </Container>
  );
}
