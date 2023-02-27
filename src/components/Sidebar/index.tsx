import { Link } from 'react-router-dom';
import { Container, List, ListMoreActions } from './style';
import homeIcon from '../../assets/icons/home.svg';
import searchIcon from '../../assets/icons/search.svg';
import exploreIcon from '../../assets/icons/explore.svg';
import reelsIcon from '../../assets/icons/reels.svg';
import messagesIcon from '../../assets/icons/messenger.svg';
import heartIcon from '../../assets/icons/heart.svg';
import createIcon from '../../assets/icons/new-post.svg';
import logo from '../../assets/logo.svg';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { AiOutlineClockCircle, AiOutlineSetting} from 'react-icons/ai';
import { BsBookmark, BsMoon} from 'react-icons/bs';
import { GoReport } from 'react-icons/go';
import { RefObject, useEffect, useRef, useState } from 'react';

export function Sidebar (){
  const [listMoreIsOpen, setListMoreIsOpen] = useState(false);
  const buttonRef = useRef(null) as RefObject<HTMLButtonElement>;
 

  function handleClickMoreActions()  {
    setListMoreIsOpen((state) => !state);
  }

  

  useEffect(() => {
    function handleClickOutside(event: MouseEvent){
      console.log('oi');
      const elementClicked = event.target as Node;
      if(buttonRef.current && !buttonRef.current.contains(elementClicked)){
        setListMoreIsOpen(false);
      }
    } 

    window.addEventListener('click',handleClickOutside,true);
    return () => window.removeEventListener('click',handleClickOutside,true);
  }, [buttonRef]);
  

  
  return (
    <Container>
      <div className="container-logo-img">
        <img src={logo} />
      </div>
      <List>
        <li>
          <Link to="/">
            <img src={homeIcon} alt="Feed"/>
            <span>Página Inicial</span>
          </Link>
        </li>
        
        <li>
          <Link to="/search">
            <img src={searchIcon} alt="Search"/>
            <span>Pesquisa</span>
          </Link>
        </li>


        <li>
          <Link to="/explore">
            <img src={exploreIcon} alt="Feed"/>
            <span>Explorar</span>
          </Link>
        
        </li>
        
        <li>
          <Link to="/reels">
            <img src={reelsIcon} alt="Reels"/>
            <span>Reels</span>
          </Link>
        
        </li>

        <li>
          <Link to="/messages">
            <img src={messagesIcon} alt="Messages"/>
            <span>Mensagens</span>
          </Link>
        
        </li>

        <li>
          <Link to="/notifications">
            <img src={heartIcon} alt="Notification"/>
            <span>Notificações</span>
          </Link>
        
        </li>

        <li>
          <Link to="/post/create">
            <img src={createIcon} alt="Create post"/>
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

      <ListMoreActions isOpen={listMoreIsOpen} className="list-more">
        <li>
          <Link to="/config">
            <span>Configurações</span>
            <AiOutlineSetting size={25}/>
          </Link>
        </li>
        <li>
          <Link to="/activity">
            <span>Sua atividade</span>
            <AiOutlineClockCircle size={25}/>
          </Link>
        </li>
        <li>
          <Link to="/saves">
            <span>Salvos</span>
            <BsBookmark size={25}/>
          </Link>
        </li>
        <li>
          <button>
            <span>Alternar modo</span>
            <BsMoon size={25}/>
          </button>
        </li>
        <li>
          <Link to="/reports">
            <span>Relatar um problema</span>
            <GoReport size={25}/>
          </Link>
        </li>
        <li>
          <Link to="/config">
            <span>Trocar de conta</span>
          </Link>
        </li>
        <li>
          <Link to="/config">
            <span>Sair</span>
          </Link>
        </li>
      </ListMoreActions>
      <button className="button-more" onClick={handleClickMoreActions} ref={buttonRef}>
        <HiBars3BottomLeft size={30}/>
        <span>Mais</span>
      </button>
    </Container>
  );
}