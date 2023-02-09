import phoneImg from '../../assets/phone.png';
import logo from '../../assets/logo.svg';
import appStoreImg from '../../assets/app-store.svg';
import googlePlayImg from '../../assets/google-play.svg';
import { BoxRight, Container, LoginBox, LoginWrap, PhoneContainer, RegisterMiniBox } from './style';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { TextInput } from '../../components/UI/TextInput';
import { Button } from '../../components/UI/Button';
import { Separate } from '../../components/UI/Separate';
import screenHostLogin1 from '../../assets/screenshost-login-1.png';
import screenHostLogin2 from '../../assets/screenshost-login-2.png';
import screenHostLogin3 from '../../assets/screenshost-login-3.png';
import React, { Component, useEffect, useRef, useState } from 'react';
import { Loader } from '../../components/Loader';
import { useForm, FormProvider } from 'react-hook-form';
import FacebookLogin, {ReactFacebookLoginProps, ReactFacebookLoginState} from 'react-facebook-login';

export function Login(){
  const [isLoading, setIsLoading] = useState(true);
  const facebookButtonRef = useRef< React.LegacyRef<FacebookLogin> | HTMLButtonElement | undefined>();

  const form = useForm();
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },1000);
  },[]);
  

  


  if(isLoading){
    return <Loader />;
  }
  
  
  return (
    <Container>
      
      <LoginWrap>
        <PhoneContainer>
          <img src={phoneImg}/>
          <img src={screenHostLogin1} className='screenhost' id="screenhost1" />
          <img src={screenHostLogin2} className='screenhost' id="screenhost2" />
          <img src={screenHostLogin3} className='screenhost' id="screenhost3" />
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
              <FacebookLogin 
                appId='766009061801285'
                fields='name,email,picture'
                callback={response => console.log(response)}
                icon="fa-facebook"
                buttonStyle={{
                  backgroundColor:'transparent',
                  color:'darkslateblue',
                  fontSize: '14px',
                  textAlign: 'center',
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