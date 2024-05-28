import { DateRangePicker } from '../../components/dateRangePicker/index.jsx';

export default {
  component: DateRangePicker,
  title: 'DateRangePicker',
  argTypes: {
    onChange: () => { },
    className: {
      control: { type: 'string' }
    }
  }
};

export const Default = {
  args: {
  }
};

export const Controled = {
  args: {
    value: [new Date().setMonth(new Date().getMonth() - 1), new Date()]
  }
};
