import phoneImg from '../../assets/phone.png';
import logo from '../../assets/logo.svg';
import appStoreImg from '../../assets/app-store.svg';
import googlePlayImg from '../../assets/google-play.svg';
import { BoxRight, Container, LoginBox, LoginWrap, RegisterMiniBox } from './style';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { TextInput } from '../../components/UI/TextInput';
import { Button } from '../../components/UI/Button';
import { Separate } from '../../components/UI/Separate';

export function Login(){
  return (
    <Container>
      
      <LoginWrap>
        <div>
          <img src={phoneImg}/>
        </div>
        <BoxRight>
          <LoginBox>
            <img src={logo} />
            <TextInput type="text" placeholder="Telefone, nome de usuário ou email"/>
            <TextInput type="password" placeholder="Senha" />
            <Button 
              text='Entrar' 
              color='white' 
              textWeight='600'
            />

            <Separate />

            <Button 
              text='Entrar com o Facebook' 
              color='darkBlue' 
              backgroundColor='transparent'
              isFacebookButton 
              textWeight='600'
            />
            <Link to="/forgetPassword">Esqueceu a senha?</Link>
          </LoginBox>
          <RegisterMiniBox >
            <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
          </RegisterMiniBox>

          <span>Obtenha o aplicativo.</span>
          <div className="container-platforms">
            <img src={appStoreImg} />
            <img src={googlePlayImg} />
          </div>

        </BoxRight>

      </LoginWrap>

      <Footer />
      
    </Container>
  );
}