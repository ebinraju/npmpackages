import { KpiTree } from '../../components/kpiTree/index.jsx';
import data from './data.js';

export default {
  component: KpiTree,
  title: 'KpiTree',
  argTypes: {
    loading: {
      control: { type: 'boolean' }
    },
    isHighlighted: {
      control: { type: 'boolean' }
    },
    showWeight: {
      control: { type: 'boolean' }
    }
  }
};

export const Default = {
  args: {
    forceValue: [],
    isHighlighted: false,
    kpis: data,
    kpiBucket: {
      "value": 82,
      "code": "CMR",
      "description": null,
      "distribution": 0,
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Commercial",
      "configuration": "Yellow",
      "weightage": 13,
      "delta": -1,
      "impactingKPI": null
    },
    formatKpiValue: (value, unit) => {
      if (unit === '$') {
        return `${unit}${value}`;
      }
      return `${value} ${unit}`
    },
    onSearchEnter: console.log,
    onCommentClick: console.log
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 20 }}>
      <div style={{ height: 500 }}>
        <KpiTree {...args} />
      </div>
    </div>
  )
};

export const Loading = {
  args: {
    loading: true
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 20 }}>
      <div style={{ height: 500 }}>
        <KpiTree {...args} />
      </div>
    </div>
  )
};

export const NoData = {
  args: {
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 20 }}>
      <div style={{ height: 500 }}>
        <KpiTree {...args} />
      </div>
    </div>
  )
};

export const CustomHeader = {
  args: {
    forceValue: [],
    hasCustomHeader: true,
    customHeader: (bucket) => {
      return <div>
        <div className="font-bold text-sm">{bucket.name}</div>
      </div>
    },
    isHighlighted: false,
    kpis: data,
    kpiBucket: {
      "value": 82,
      "code": "CMR",
      "description": null,
      "distribution": 0,
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Commercial",
      "configuration": "Yellow",
      "weightage": 13,
      "delta": -1,
      "impactingKPI": null
    },
    formatKpiValue: (value, unit) => {
      if (unit === '$') {
        return `${unit}${value}`;
      }
      return `${value} ${unit}`
    },
    onSearchEnter: console.log
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 20 }}>
      <div style={{ height: 500 }}>
        <KpiTree {...args} />
      </div>
    </div>
  )
};