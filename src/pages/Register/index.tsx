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
import { useForm, FormProvider } from 'react-hook-form';
import ReactFacebookLogin from 'react-facebook-login';


export function Register(){
  const form = useForm();
    
  return (
    <Container>
      <FormProvider {...form}>
        <RegisterBox onSubmit={form.handleSubmit(data => console.log(data))}>
          <img src={logo} />
          <h2>
        Cadastre-se para ver fotos e vídeos dos seus amigos.
          </h2>
          <ReactFacebookLogin 
            appId='766009061801285'
            fields='name,email,picture'
            callback={response => console.log(response)}
            icon="fa-facebook"
            textButton='Entrar com o Facebook'
            buttonStyle={{
              backgroundColor:'#0095F6',
              color:'#fff',
              fontSize: '12px',
              textAlign: 'center',
              fontWeight:'bolder',
              margin:'15px auto',
              borderRadius:'8px', 
              border: 'none',
              display: 'flex',
              justifyContent:'center',
              alignItems: 'center',
              height:'10px',
              width: '100%'
            }}
          />
          <Separate  />

          <TextInput 
            type="text" 
            placeholder='Número do celular ou email'
            name='emailOrNumberOfPhone'
          />
          <TextInput 
            type="text" 
            placeholder='Nome completo' 
            name='fullname'

          />
          <TextInput 
            type="text" 
            placeholder='Nome de usuário'
            name='username'
          />
          <TextInput 
            type="password" 
            placeholder='Senha' 
            name='password'
          />

          <p>
          As pessoas que usam nosso serviço podem ter enviado suas informações de contato para o Instagram. <Link to="">Saiba mais</Link>
          </p>

          <p>
          
          Ao se cadastrar, você concorda com nossos <Link to=''>Termos</Link>, <Link to="">Política de Privacidade</Link> e <Link to="">Política de Cookies.</Link>
          </p>
          <Button
            text='Cadastre-se'
            color='white'
            textWeight='700'
          />
        </RegisterBox>
      </FormProvider>

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