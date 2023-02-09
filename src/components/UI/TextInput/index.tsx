import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, Placeholder, Container} from './style';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
  type: 'password' | 'text' | 'email',
  placeholder: string,  
  name: string
}
export function TextInput({type, placeholder,name,...rest}: TextInputProps){
  const { register,watch} = useFormContext();
  const value = watch(name);

  return (
    <Container >
      <Input 
        type={type} 
        {...rest}
        {...register(name)}
        
      />
      <Placeholder 
        movePlaceholder={Boolean(value)}
      >
        {placeholder}
      </Placeholder>
    </Container>
    
  );
}