import { GroupedSelect } from "../../components/groupedSelect/index.jsx";
import { useArgs } from '@storybook/preview-api';

export default {
  component: GroupedSelect,
  title: "GroupedSelect",
  argTypes: {},
};

export const Default = {
  args: {
    onSort: console.log,
    onChange: console.log,
    defaultValue: [],
    defaultSort: "ASC",
    emptyMessage: 'No data found',
    childEmptyMessage: 'No vessels found',
    title: 'Crew',
    valueTitle: 'Score',
    options: [
      {
        label: "Fleet Group 1",
        key: 1,
        options: [
          { label: "Vessel 1", value: "1", index: 45, delta: -1 },
          { label: "Vessel 2", value: "2", index: 55, delta: 0 },
          { label: "Vessel 3", value: "3", index: 33, delta: 1 },
          { label: "Vessel 4", value: "4", index: 56, delta: -1 },
          { label: "Vessel 9", value: "9", index: 32, delta: -1 },
          { label: "Vessel 10", value: "10", index: 15, delta: -1 },
          { label: "Vessel 11", value: "11", index: 44, delta: -1 },
          { label: "Vessel 12", value: "12", index: 88, delta: -1 },
        ],
      },
      {
        label: "Fleet Group 2",
        key: 2,
        options: [
          { label: "Vessel 5", value: "5", index: 57, delta: -1 },
          { label: "Vessel 6", value: "6", index: 26, delta: -1 },
          { label: "Vessel 7", value: "7", index: 89, delta: -1 },
          { label: "Vessel 8", value: "8", index: 46, delta: -1 },
          { label: "Vessel 13", value: "13", index: 56, delta: -1 },
          { label: "Vessel 14", value: "14", index: 62, delta: -1 },
          { label: "Vessel 15", value: "15", index: 36, delta: -1 },
          { label: "Vessel 16", value: "16", index: 45, delta: -1 },
        ],
      },
      {
        label: "Fleet Group 3",
        key: 3
      }
    ],
  },
  render: (args) => (
    <div
      style={{
        width: 352,
        background: "#fff",
        padding: "20px 0",
        borderRadius: 10,
        boxShadow: "0px 1px 5px 0px #00000026",
      }}
    >
      <GroupedSelect {...args} />
    </div>
  ),
};

export const Comments = {
  args: {
    onSort: console.log,
    onChange: console.log,
    defaultValue: [],
    defaultSort: "ASC",
    emptyMessage: 'No data found',
    childEmptyMessage: 'No vessels found',
    showComment: true,
    onCommentClick: console.log,
    options: [
      {
        label: "Fleet Group 1",
        key: 1,
        options: [
          { label: "Vessel 1", value: "1", index: 45, delta: -1, showComment: true },
          { label: "Vessel 2", value: "2", index: 55, delta: 0 },
          { label: "Vessel 3", value: "3", index: 33, delta: 1 },
          { label: "Vessel 4", value: "4", index: 56, delta: -1 },
          { label: "Vessel 9", value: "9", index: 32, delta: -1 },
          { label: "Vessel 10", value: "10", index: 15, delta: -1 },
          { label: "Vessel 11", value: "11", index: 44, delta: -1 },
          { label: "Vessel 12", value: "12", index: 88, delta: -1 },
        ],
      },
      {
        label: "Fleet Group 2",
        key: 2,
        options: [
          { label: "Vessel 5", value: "5", index: 57, delta: -1 },
          { label: "Vessel 6", value: "6", index: 26, delta: -1 },
          { label: "Vessel 7", value: "7", index: 89, delta: -1 },
          { label: "Vessel 8", value: "8", index: 46, delta: -1 },
          { label: "Vessel 13", value: "13", index: 56, delta: -1 },
          { label: "Vessel 14", value: "14", index: 62, delta: -1 },
          { label: "Vessel 15", value: "15", index: 36, delta: -1 },
          { label: "Vessel 16", value: "16", index: 45, delta: -1 },
        ],
      },
      {
        label: "Fleet Group 3",
        key: 3
      }
    ],
  },
  render: (args) => (
    <div
      style={{
        width: 352,
        background: "#fff",
        padding: "20px 0",
        borderRadius: 10,
        boxShadow: "0px 1px 5px 0px #00000026",
      }}
    >
      <GroupedSelect {...args} />
    </div>
  ),
};


export const FormatIndexValue = {
  args: {
    onSort: console.log,
    onChange: console.log,
    defaultValue: [],
    defaultSort: "ASC",
    emptyMessage: 'No data found',
    childEmptyMessage: 'No vessels found',
    showComment: true,
    onCommentClick: console.log,
    formatIndexValue : (item) => {
      return <div>Index is {item.index || 0}</div>
    },
    options: [
      {
        label: "Fleet Group 1",
        key: 1,
        options: [
          { label: "Vessel 1", value: "1", index: 45, delta: -1, showComment: true },
          { label: "Vessel 2", value: "2", index: 55, delta: 0 },
          { label: "Vessel 3", value: "3", index: 33, delta: 1 },
          { label: "Vessel 4", value: "4", index: 56, delta: -1 },
          { label: "Vessel 9", value: "9", index: 32, delta: -1 },
          { label: "Vessel 10", value: "10", index: 15, delta: -1 },
          { label: "Vessel 11", value: "11", index: 44, delta: -1 },
          { label: "Vessel 12", value: "12", index: 88, delta: -1 },
        ],
      },
      {
        label: "Fleet Group 2",
        key: 2,
        options: [
          { label: "Vessel 5", value: "5", index: 57, delta: -1 },
          { label: "Vessel 6", value: "6", index: 26, delta: -1 },
          { label: "Vessel 7", value: "7", index: 89, delta: -1 },
          { label: "Vessel 8", value: "8", index: 46, delta: -1 },
          { label: "Vessel 13", value: "13", index: 56, delta: -1 },
          { label: "Vessel 14", value: "14", index: 62, delta: -1 },
          { label: "Vessel 15", value: "15", index: 36, delta: -1 },
          { label: "Vessel 16", value: "16", index: 45, delta: -1 },
        ],
      },
      {
        label: "Fleet Group 3",
        key: 3
      }
    ],
  },
  render: (args) => (
    <div
      style={{
        width: 352,
        background: "#fff",
        padding: "20px 0",
        borderRadius: 10,
        boxShadow: "0px 1px 5px 0px #00000026",
      }}
    >
      <GroupedSelect {...args} />
    </div>
  ),
};


export const Controlled = {
  args: {
    value: [],
    onSort: console.log,
    defaultValue: [],
    defaultSort: "ASC",
    emptyMessage: "No data found",
    childEmptyMessage: "No vessels found",
    title: "Crew",
    valueTitle: "Score",
    options: [
      {
        label: "Fleet Group 1",
        key: 1,
        options: [
          { label: "Vessel 1", value: "1", index: 45, delta: -1 },
          { label: "Vessel 2", value: "2", index: 55, delta: 0 },
          { label: "Vessel 3", value: "3", index: 33, delta: 1 },
          { label: "Vessel 4", value: "4", index: 56, delta: -1 },
          { label: "Vessel 9", value: "9", index: 32, delta: -1 },
          { label: "Vessel 10", value: "10", index: 15, delta: -1 },
          { label: "Vessel 11", value: "11", index: 44, delta: -1 },
          { label: "Vessel 12", value: "12", index: 88, delta: -1 },
        ],
      },
      {
        label: "Fleet Group 2",
        key: 2,
        options: [
          { label: "Vessel 5", value: "5", index: 57, delta: -1 },
          { label: "Vessel 6", value: "6", index: 26, delta: -1 },
          { label: "Vessel 7", value: "7", index: 89, delta: -1 },
          { label: "Vessel 8", value: "8", index: 46, delta: -1 },
          { label: "Vessel 13", value: "13", index: 56, delta: -1 },
          { label: "Vessel 14", value: "14", index: 62, delta: -1 },
          { label: "Vessel 15", value: "15", index: 36, delta: -1 },
          { label: "Vessel 16", value: "16", index: 45, delta: -1 },
        ],
      },
      {
        label: "Fleet Group 3",
        key: 3,
      },
      {
        label: "Fleet Group 4",
        key: 4,
        options: [{ label: "Vessel 5", value: "17", index: 57, delta: -1 }],
      },
      {
        label: "Fleet Group 5",
        key: 5,
        options: [
          { label: "Vessel 5", value: "18", index: 57, delta: -1 },
          { label: "Vessel 6", value: "19", index: 26, delta: -1 },
        ],
      },
    ],
  },
  render: (args) => {
    const [ ,updateArgs ] = useArgs();

    function onChange(e) {
      if(e.length <= 5)
      updateArgs({ value: e });
    }

   return( <div
      style={{
        width: 352,
        background: "#fff",
        padding: "20px 0",
        borderRadius: 10,
        boxShadow: "0px 1px 5px 0px #00000026",
      }}
    >
      <GroupedSelect {...args} onChange={onChange}/>
    </div>)
  },
};

export const SingleMode = {
  args: {
    onSort: console.log,
    onChange: console.log,
    isSingle:true,
    defaultValue: [],
    defaultSort: "ASC",
    emptyMessage: 'No data found',
    childEmptyMessage: 'No vessels found',
    title: 'Crew',
    valueTitle: 'Score',
    options: [
      {
        label: "Fleet Group 1",
        key: 1,
        options: [
          { label: "Vessel 1", value: "1", index: 45, delta: -1 },
          { label: "Vessel 2", value: "2", index: 55, delta: 0 },
          { label: "Vessel 3", value: "3", index: 33, delta: 1 },
          { label: "Vessel 4", value: "4", index: 56, delta: -1 },
          { label: "Vessel 9", value: "9", index: 32, delta: -1 },
          { label: "Vessel 10", value: "10", index: 15, delta: -1 },
          { label: "Vessel 11", value: "11", index: 44, delta: -1 },
          { label: "Vessel 12", value: "12", index: 88, delta: -1 },
        ],
      },
      {
        label: "Fleet Group 2",
        key: 2,
        options: [
          { label: "Vessel 5", value: "5", index: 57, delta: -1 },
          { label: "Vessel 6", value: "6", index: 26, delta: -1 },
          { label: "Vessel 7", value: "7", index: 89, delta: -1 },
          { label: "Vessel 8", value: "8", index: 46, delta: -1 },
          { label: "Vessel 13", value: "13", index: 56, delta: -1 },
          { label: "Vessel 14", value: "14", index: 62, delta: -1 },
          { label: "Vessel 15", value: "15", index: 36, delta: -1 },
          { label: "Vessel 16", value: "16", index: 45, delta: -1 },
        ],
      },
      {
        label: "Fleet Group 3",
        key: 3
      },
      {
        label: "Fleet Group 4",
        key: 4,
        options: [
          { label: "Vessel 5", value: "17", index: 57, delta: -1 }],
      },
      {
        label: "Fleet Group 5",
        key: 5,
        options: [
          { label: "Vessel 5", value: "18", index: 57, delta: -1 },
          { label: "Vessel 6", value: "19", index: 26, delta: -1 }
        ],
      },
    ],
  },
  render: (args) => (
    <div
      style={{
        width: 352,
        background: "#fff",
        padding: "20px 0",
        borderRadius: 10,
        boxShadow: "0px 1px 5px 0px #00000026",
      }}
    >
      <GroupedSelect {...args} />
    </div>
  ),
};
