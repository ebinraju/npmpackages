import { Tabs } from '../../components/tabs/index.jsx';

export default {
  component: Tabs,
  title: 'Tabs'
};

export const Default = {
  args: {
    onActiveChange: console.log,
    tabs: [
      { title: 'Cost', key: 1 },
      { title: 'Digitalization', key: 2 },
      { title: 'Environmental', key: 3 },
      { title: 'Operational', key: 4 },
      { title: 'Reliability', key: 5 },
      { title: 'Safety and Compliance', key: 6 }
    ]
  }
};

export const DefaultActive = {
  args: {
    defaultActive: 3,
    onActiveChange: console.log,
    tabs: [
      { title: 'Cost', key: 1 },
      { title: 'Digitalization', key: 2 },
      { title: 'Environmental', key: 3 },
      { title: 'Operational', key: 4 },
      { title: 'Reliability', key: 5 },
      { title: 'Safety and Compliance', key: 6 }
    ]
  }
};

export const Controlled = {
  args: {
    active: 5,
    onActiveChange: console.log,
    tabs: [
      { title: 'Cost', key: 1 },
      { title: 'Digitalization', key: 2 },
      { title: 'Environmental', key: 3 },
      { title: 'Operational', key: 4 },
      { title: 'Reliability', key: 5 },
      { title: 'Safety and Compliance', key: 6 }
    ]
  }
};

export const Extra = {
  args: {
    onActiveChange: console.log,
    tabs: [
      { title: 'Cost', key: 1 },
      { title: 'Digitalization', key: 2 },
      { title: 'Environmental', key: 3 },
      { title: 'Operational', key: 4 },
      { title: 'Reliability', key: 5 },
      { title: 'Safety and Compliance', key: 6 }
    ],
    extra: (
      <div>Hello</div>
    )
  }
};
