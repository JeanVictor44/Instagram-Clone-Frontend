import { HtmlHTMLAttributes } from 'react';
import { PressButton } from './style';
import { AiFillFacebook} from 'react-icons/ai';

const buttonColors = {
  darkBlue : '  #385185',
  lightBlue: '#0095F6',
  white: '#FFF',
  transparent: 'transparent'
};

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    text: string,
    textWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
    isFacebookButton?: boolean,
    color?: 'white'| 'darkBlue',
    backgroundColor?:'transparent' | 'lightBlue' | 'darkBlue' 
}

export function Button({
  text = 'Entrar', 
  textWeight = '400', 
  color = 'white',
  backgroundColor = 'lightBlue',
  isFacebookButton = false, 
  ...props 
}: ButtonProps){
  return (
    <PressButton type="button" textWeight={textWeight} color={buttonColors[color]}  backgroundColor={buttonColors[backgroundColor]} {...props}>
      {
        isFacebookButton && <AiFillFacebook size={'20px'}/>
      }
      {text}
    </PressButton>        
  );
}