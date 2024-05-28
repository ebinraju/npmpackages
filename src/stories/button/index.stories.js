import { Button } from '../../components/button/index.jsx';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    type: {
      options: ['primary', 'ghost', 'outlined'],
      control: { type: 'inline-radio' }
    },
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'inline-radio' }
    }
  }
};

export const Default = {
  args: {
    children: 'Button',
  }
};
