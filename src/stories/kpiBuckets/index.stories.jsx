import { KpiBuckets } from '../../components/kpiBuckets/index.jsx';

export default {
  component: KpiBuckets,
  title: 'KpiBuckets',
  argTypes: {
    isMulti: {
      control: { type: 'boolean' }
    }
  }
};

export const Default = {
  args: {
    defaultActive: 'FLEET',
    isMulti: true,
    onActiveChange: console.log,
    buckets: [
      {
        value: 0.59,
        code: "FLEET",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Fleet",
        weightage: 1,
        configuration: "Red",
        colorCode: 0,
        impactingKPI: null,
        hideWeight: true
      },
      {
        value: 0.59,
        code: "2",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Commercial",
        weightage: 1,
        delta: 1,
        configuration: "Yellow",
        colorCode: 0,
        impactingKPI: null
      },
      {
        value: 0.59,
        code: "3",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Digitization",
        weightage: 1,
        delta: 0,
        configuration: "Green",
        colorCode: 0,
        impactingKPI: null
      },
      {
        value: 0.59,
        code: "4",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Environmental",
        weightage: 1,
        delta: -1,
        configuration: "Red",
        colorCode: 0,
        impactingKPI: null
      },
      {
        value: 0.59,
        code: "5",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Operational",
        weightage: 1,
        delta: -1,
        configuration: "Red",
        colorCode: 0,
        impactingKPI: null
      },
      {
        value: 0.59,
        code: "6",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Reliability",
        weightage: 1,
        delta: -1,
        configuration: "Red",
        colorCode: 0,
        impactingKPI: null
      },
      {
        value: 0.59,
        code: "7",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Safety & Compliance",
        weightage: 1,
        delta: -1,
        configuration: "Red",
        colorCode: 0,
        impactingKPI: null
      },
    ],
    formatTitle: (title) => `${title} Index`
  }
};

export const Controlled = {
  args: {
    value: ['FLEET'],
    defaultActive: 'FLEET',
    isMulti: true,
    onActiveChange: console.log,
    buckets: [
      {
        value: 0.59,
        code: "FLEET",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Fleet",
        weightage: 1,
        configuration: "Red",
        colorCode: 0,
        impactingKPI: null,
        hideWeight: true
      },
      {
        value: 0.59,
        code: "2",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Commercial",
        weightage: 1,
        delta: 1,
        configuration: "Yellow",
        colorCode: 0,
        impactingKPI: null
      },
      {
        value: 0.59,
        code: "3",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Digitization",
        weightage: 1,
        delta: 0,
        configuration: "Green",
        colorCode: 0,
        impactingKPI: null
      },
      {
        value: 0.59,
        code: "4",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Environmental",
        weightage: 1,
        delta: -1,
        configuration: "Red",
        colorCode: 0,
        impactingKPI: null
      },
      {
        value: 0.59,
        code: "5",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Operational",
        weightage: 1,
        delta: -1,
        configuration: "Red",
        colorCode: 0,
        impactingKPI: null
      },
      {
        value: 0.59,
        code: "6",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Reliability",
        weightage: 1,
        delta: -1,
        configuration: "Red",
        colorCode: 0,
        impactingKPI: null
      },
      {
        value: 0.59,
        code: "7",
        description: null,
        distribution: 0,
        id: "00000000-0000-0000-0000-000000000000",
        name: "Safety & Compliance",
        weightage: 1,
        delta: -1,
        configuration: "Red",
        colorCode: 0,
        impactingKPI: null
      },
    ],
    formatTitle: (title) => `${title} Index`
  }
};
