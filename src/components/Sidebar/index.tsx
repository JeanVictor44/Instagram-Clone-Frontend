import { Link } from 'react-router-dom';
import { Container, List } from './style';
import homeIcon from '../../assets/icons/home.svg';
import searchIcon from '../../assets/icons/search.svg';
import exploreIcon from '../../assets/icons/explore.svg';
import reelsIcon from '../../assets/icons/reels.svg';
import messagesIcon from '../../assets/icons/messenger.svg';

export function Sidebar (){
  return (
    <Container>
      <div className="container-logo-img">
        <img src="" />
      </div>
      <List>
        <li>
          <Link to="/feed">
            <img src={homeIcon} alt="Feed"/>
            <span>Página Inicial</span>
          </Link>
        </li>
        
        <li>
          <Link to="/search">
            <img src={homeIcon} alt="Search"/>
            <span>Pesquisa</span>
          </Link>
        </li>


        <li>
          <Link to="/explore">
            <img src={homeIcon} alt="Feed"/>
            <span>Explorar</span>
          </Link>
        
        </li>
        
        <li>
          <Link to="/reels">
            <img src={homeIcon} alt="Reels"/>
            <span>Reels</span>
          </Link>
        
        </li>

        <li>
          <Link to="/messages">
            <img src={homeIcon} alt="Messages"/>
            <span>Mensagens</span>
          </Link>
        
        </li>

        <li>
          <Link to="/notifications">
            <img src={homeIcon} alt="Notification"/>
            <span>Notificações</span>
          </Link>
        
        </li>

        <li>
          <Link to="/post/create">
            <img src={homeIcon} alt="Create post"/>
            <span>Criar</span>
          </Link>
        
        </li>

        <li>
          <Link to="/profile">
            <img src={homeIcon} alt="Profile"/>
            <span>Perfil</span>
          </Link>
        
        </li>
      </List>
    </Container>
  );
}