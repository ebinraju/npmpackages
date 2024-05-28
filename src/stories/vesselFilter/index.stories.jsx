import React, { useMemo, useState } from "react";
import { VesselFilter } from "../../components/vesselFilter/index.jsx";

const dataOptions = {
  1: [{
    label: "Fleet Group 1",
    key: 1,
    options: [
      { label: "Vessel 1", value: "1" },
      { label: "Vessel 2", value: "2" },
      { label: "Vessel 3", value: "3" }
    ],
  },
  {
    label: "Fleet Group 2",
    key: 2,
    options: [],
  }],
  2: [{
    label: "Bulk Carrier",
    key: 1,
    options: [
      { label: "Vessel 1", value: "1" },
      { label: "Vessel 2", value: "2" },
      { label: "Vessel 5", value: "5" },
      { label: "Vessel 3", value: "3" }
    ],
  },
  {
    label: "Chemical Tanker",
    key: 2,
    options: [
      { label: "Vessel 6", value: "6" },
      { label: "Vessel 7", value: "7" }
    ],
  }]
}

export default {
  component: VesselFilter,
  title: "VesselFilter",
  argTypes: {
    hideVesselDropdown: {
      control: { type: 'boolean' }
    }
  },
};

export const Default = {
  args: {
    onChange: console.log,
    onGroupChange: () => { },
    groups: [
      { label: "Fleet Group", value: 1 },
      { label: "Vessel Type", value: 2 },
    ],
    options: [
      {
        label: "Fleet Group 1",
        key: 1,
        options: [
          { label: "Vessel 1", value: "1" },
          { label: "Vessel 2", value: "2" },
          { label: "Vessel 3", value: "3" }
        ],
      },
      {
        label: "Fleet Group 2",
        key: 2,
        options: [
          { label: "Vessel 5", value: "5" },
          { label: "Vessel 6", value: "6" },
          { label: "Vessel 7", value: "7" }
        ],
      },
    ],
    colorCount: {
      green: 10,
      yellow: 30,
      red: 15,
    },
    defaultSelectedColor: 'GREEN',
  },
  render: function Render(args) {
    const [group, setGroup] = useState(1);

    const vesselOptions = useMemo(() => {
      return dataOptions[group];
    }, [group]);

    return (
      <div style={{ width: 600 }}>
        <VesselFilter
          {...args}
          onGroupChange={(group) => setGroup(group.value)}
          options={vesselOptions}
          childEmptyMessage='No vessels found'
    />
      </div>
    );
  },
};

export const Controlled = {
  args: {
    onChange: console.log,
    onGroupChange: () => { },
    value: [
      { label: "Vessel 2", value: "2" },
      { label: "Vessel 3", value: "3" }
    ],
    groups: [
      { label: "Fleet Group", value: 1 },
      { label: "Vessel Type", value: 2 },
    ],
    options: [
      {
        label: "Fleet Group 1",
        key: 1,
        options: [
          { label: "Vessel 1", value: "1" },
          { label: "Vessel 2", value: "2" },
          { label: "Vessel 3", value: "3" }
        ],
      },
      {
        label: "Fleet Group 2",
        key: 2,
        options: [
          { label: "Vessel 5", value: "5" },
          { label: "Vessel 6", value: "6" },
          { label: "Vessel 7", value: "7" }
        ],
      },
    ],
    colorCount: {
      green: 10,
      yellow: 30,
      red: 15,
    },
    defaultSelectedColor: 'GREEN',
  },
  render: function Render(args) {
    const [group, setGroup] = useState(1);

    const vesselOptions = useMemo(() => {
      return dataOptions[group];
    }, [group]);

    return (
      <div style={{ width: 600 }}>
        <VesselFilter
          {...args}
          onGroupChange={(group) => setGroup(group.value)}
          options={vesselOptions}
        />
      </div>
    );
  },
};


export const MultiSelectMenuList = {
  args: {
    onChange: console.log,
    onGroupChange: () => { },
    groups: [
      { label: "Fleet Group", value: 1 },
      { label: "Vessel Type", value: 2 },
    ],
    options: [
      { label: "Vessel 1", value: "1" },
      { label: "Vessel 2", value: "2" },
      { label: "Vessel 3", value: "3" },
    ],
    colorCount: {
      green: 10,
      yellow: 30,
      red: 15,
    },
    defaultSelectedColor: "GREEN",
  },
  render: function Render(args) {
    const [group, setGroup] = useState(1);

    const vesselOptions = useMemo(() => {
      return args.options;
    }, [group]);

    return (
      <div style={{ width: 600 }}>
        <VesselFilter
          {...args}
          onGroupChange={(group) => setGroup(group.value)}
          options={vesselOptions}
        />
      </div>
    );
  },
};