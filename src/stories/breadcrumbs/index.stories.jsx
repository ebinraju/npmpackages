import { Breadcrumbs } from '../../components/breadcrumbs/index.jsx';

export default {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
  argTypes: {}
};

export const Default = {
  args: {
    breadcrumbs: [
      { label: 'Live Monitoring', key: 1 },
      { label: 'Edit KPIs', key: 2 },
      { label: 'KPI History', key: 3 }
    ],
    onItemClick: console.log
  }
};
