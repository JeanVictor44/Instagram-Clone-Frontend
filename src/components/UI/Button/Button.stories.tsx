import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps} from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    text: 'Entrar',
    
  },
} as Meta<ButtonProps>;

// Quando não tem variação
export const Default: StoryObj= {
    
};