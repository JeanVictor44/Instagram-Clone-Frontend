import { Container } from './style';
import instagramIcon from '../../assets/icons/instagram.png';
import fromMeta from '../../assets/from-meta.png';

export function Loader(){
  return (
    <Container>
      <img src={instagramIcon} alt="ícone do instagram" />
      <img src={fromMeta} alt="from meta"/>
    </Container>
  );
}