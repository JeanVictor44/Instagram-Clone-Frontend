import { Link } from 'react-router-dom';
import { LoginBox as RegisterBox } from '../Login/style';
import { RegisterMiniBox as LoginMiniBox } from '../Login/style';
import appStoreImg from '../../assets/app-store.svg';
import googlePlayImg from '../../assets/google-play.svg';
import { Container } from './style';
import { Footer } from '../../components/Footer';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/UI/Button';
import { Separate } from '../../components/UI/Separate';
import { TextInput } from '../../components/UI/TextInput';

export function Register(){
  return (
    <Container>
      <RegisterBox>
        <img src={logo} />
        <h2>
        Cadastre-se para ver fotos e vídeos dos seus amigos.
        </h2>
        <Button
          text='Entrar com o Facebook'
          backgroundColor='lightBlue'
          color='white'
          textWeight='700'
          isFacebookButton

        />
        <Separate  />

        <TextInput type="text" placeholder='Número do celular ou email' />
        <TextInput type="text" placeholder='Nome completo'/>
        <TextInput type="text" placeholder='Nome de usuário'/>
        <TextInput type="password" placeholder='Senha'/>

        <p>
          As pessoas que usam nosso serviço podem ter enviado suas informações de contato para o Instagram. <Link to="">Saiba mais</Link>
        </p>

        <p>
          
          Ao se cadastrar, você concorda com nossos <Link to=''>Termos</Link>, <Link to="">Política de Privacidade</Link> e <Link to="">Política de Cookies.</Link>
        </p>
        <Button
          text='Cadastre-se'
          backgroundColor='lightBlue'
          color='white'
          textWeight='700'

        />
      </RegisterBox>
      <LoginMiniBox>
        <span>Tem uma conta? <Link to="/login">Conecte-se</Link></span>
      </LoginMiniBox>
      <span>Obtenha o aplicativo</span>
      <div className="container-platforms">
        <img src={appStoreImg} />
        <img src={googlePlayImg} />
      </div>
      <Footer />
    </Container>
    
    
  );
}