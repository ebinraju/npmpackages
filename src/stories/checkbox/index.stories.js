import { Checkbox } from '../../components/checkbox/index.jsx';

export default {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' }
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'large']
    }
  }
};

export const Default = {
  args: {
    label: 'Weightage'
  }
};

export const Indeterminate = {
  args: {
    label: 'Weightage',
    indeterminate: true
  }
};
