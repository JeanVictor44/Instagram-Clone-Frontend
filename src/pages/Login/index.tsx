import phoneImg from '../../assets/phone.png';
import screenHostLogin1 from '../../assets/screenshost-login-1.png';
import screenHostLogin2 from '../../assets/screenshost-login-2.png';
import screenHostLogin3 from '../../assets/screenshost-login-3.png';
import logo from '../../assets/logo.svg';
import appStoreImg from '../../assets/app-store.svg';
import googlePlayImg from '../../assets/google-play.svg';

import { BoxRight, Container, LoginBox, LoginWrap, PhoneContainer, RegisterMiniBox } from './style';

import { Footer } from '../../components/Footer';
import { TextInput } from '../../components/UI/TextInput';
import { Button } from '../../components/UI/Button';
import { Separate } from '../../components/UI/Separate';
import { Loader } from '../../components/Loader';

import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { useForm, FormProvider } from 'react-hook-form';

import ReactFacebookLogin from 'react-facebook-login';

export function Login(){
  const [isLoading, setIsLoading] = useState(true);
  const [imagesState, setImagesState] = useState(['visible', 'not-visible', 'not-visible']);
  const form = useForm();

  useEffect(() => {
    console.log('hello');
    setTimeout(() => {
      setIsLoading(false);
    },2000);

    const interval = setInterval(() => {
      setImagesState((oldState) => {
        const indexVisibleState = oldState.findIndex((state) => state == 'visible');
        if(indexVisibleState == 0){
          return ['not-visible', 'visible', 'not-visible'];
        }else if(indexVisibleState == 1){
          return ['not-visible', 'not-visible', 'visible'];
        }else {
          return ['visible', 'not-visible', 'not-visible'];
        }
        
      });
    }, 5000);

    return () => clearInterval(interval);
  },[]);
  
  if(isLoading){
    return <Loader />;
  }
  
  return (
    <Container>
      
      <LoginWrap>
        <PhoneContainer>
          <img src={phoneImg}/>
          <img src={screenHostLogin1} className={`screenhost ${imagesState[0]}`} />
          <img src={screenHostLogin2} className={`screenhost ${imagesState[1]}`} />
          <img src={screenHostLogin3} className={`screenhost ${imagesState[2]}`} />
        </PhoneContainer>
        <BoxRight>
          <FormProvider {...form}>


            <LoginBox onSubmit={form.handleSubmit((data) => console.log(data) )}>
              <img src={logo} />
              <TextInput type="text" placeholder="Telefone, nome de usuário ou email" name="emailOrPhoneOrUsername"/>
              <TextInput type="password" placeholder="Senha" name="password"/>
              <Button 
                text='Entrar' 
                color='white' 
                textWeight='600'
              />

              <Separate />
              <ReactFacebookLogin 
                appId='766009061801285'
                fields='name,email,picture'
                callback={response => console.log(response)}
                icon="fa-facebook"
                textButton='Entrar com o Facebook'
                buttonStyle={{
                  backgroundColor:'transparent',
                  color:'#385185',
                  fontSize: '14px',
                  textAlign: 'center',
                  fontWeight:'bolder',
                  margin:'0 auto',
                  border: 'none',
                  display: 'block',
                  marginBlock: '0 auto'
                }}
              />
       
              <Link to="/forgetPassword">Esqueceu a senha?</Link>

              

            </LoginBox>
          </FormProvider>
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