import { HtmlHTMLAttributes } from 'react';
import { PressButton } from './style';


export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    text: string,
    textWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
}

export function Button({
  text = 'Entrar', 
  textWeight = '400', 
  ...props 
}: ButtonProps){
  return (
    <PressButton type="submit" textWeight={textWeight} {...props}>

      {text}
    </PressButton>        
  );
}