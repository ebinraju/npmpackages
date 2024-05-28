import { Pagination } from '../../components/pagination/index.jsx';

export default {
  component: Pagination,
  title: 'Pagination',
  argTypes: {
    forcePage: {
      control: 'number'
    },
    onPageChange: () => { }
  }
};

export const Default = {
  args: {
    totalCount: 95
  }
};
