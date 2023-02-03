import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps} from '.';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Email',
    type: 'email'
    
  }
} as Meta<TextInputProps>;

// Quando não tem variação
export const Default: StoryObj= {
    
};