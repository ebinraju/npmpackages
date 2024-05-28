import { Search } from '../../components/search/index.jsx';

export default {
  component: Search,
  title: 'Search',
  argTypes: {
    allowClear: {
      options: [true, false],
      control: { type: "inline-radio" },
    },
    autoSearch: {
      options: [true, false],
      control: { type: "inline-radio" },
    }
  }
};

export const Default = {
  args: {
    onSearchEnter: console.log
  }
};

export const PatternValidation = {
  args: {
    pattern: "^[a-zA-Z]*$",
    onSearchEnter: console.log
  }
};
