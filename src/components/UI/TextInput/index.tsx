import { InputHTMLAttributes, useState } from 'react';
import { Input, Placeholder, Container} from './style';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
  type: 'password' | 'text' | 'email',
  placeholder: string
  
}
export function TextInput({type, placeholder,...rest}: TextInputProps){
  const [text, setText ] = useState('');
  return (
    <Container >
      <Input 
        type={type} 
        {...rest}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Placeholder 
        movePlaceholder={Boolean(text)}
      >
        {placeholder}
      </Placeholder>
    </Container>
    
  );
}