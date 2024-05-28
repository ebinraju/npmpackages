import { Select } from '../../components/select/index.jsx';

export default {
  component: Select,
  title: 'Select',
  argTypes: {
  }
};

export const Single = {
  args: {
    size: 'small',
    menuIsOpen: true,
    options: [
      { label: 'option 1', value: 1 },
      { label: 'option 2', value: 2 }
    ]
  }
};

export const CustomClassName = {
  args: {
    // size: 'small',
    classNamePrefix: 'csi',
    menuIsOpen: true,
    options: [
      { label: 'option 1', value: 1 },
      { label: 'option 2', value: 2 }
    ]
  }
};

export const Multiple = {
  args: {
    options: [
      { label: 'option 1', value: 1 },
      { label: 'option 2', value: 2 },
      { label: 'option 3', value: 3 }
    ],
    isMulti: true,
    closeMenuOnSelect: false
  }
}

export const CascadingOptions = {
  args: {
    menuIsOpen: true,
    isMulti: true,
    captureMenuScroll: false,
    disableSelectAllGroups: false,
    classNamePrefix: 'csi',
    childEmptyMessage: 'No vessels found',
    isSearchable: true,
    options: [
      {
        label: 'Fleet Group 1',
        key: 1,
        options: [
          { label: 'Vessel 1', value: '1' },
          { label: 'Vessel 2', value: '2' },
          { label: 'Vessel 3', value: '3' },
          { label: 'Vessel 4', value: '4' },
          { label: 'Vessel 9', value: '9' },
          { label: 'Vessel 10', value: '10' },
          { label: 'Vessel 11', value: '11' },
          { label: 'Vessel 12', value: '12' }
        ]
      },
      {
        label: 'Fleet Group 2',
        key: 2,
        options: [
          { label: 'Vessel 5', value: '5' },
          { label: 'Vessel 6', value: '6' },
          { label: 'Vessel 7', value: '7' },
          { label: 'Vessel 8', value: '8' },
          { label: 'Vessel 13', value: '13' },
          { label: 'Vessel 14', value: '14' },
          { label: 'Vessel 15', value: '15' },
          { label: 'Vessel 16', value: '16' }
        ]
      }
    ]
  }
}

export const CasecadingCustomStyle = {
  args: {
    menuIsOpen: true,
    isMulti: true,
    isSearchable: false,
    captureMenuScroll: false,
    disableSelectAllGroups: true,
    customStyle: {
      checkbox: {
        child: 'primary'
      },
      control: {
        type: 'csi'
      }
    },
    childEmptyMessage: 'No vessels found',
    options: [
      {
        label: 'Fleet Group 1',
        key: 1,
        options: [
          { label: 'Vessel 1', value: '1' },
          { label: 'Vessel 2', value: '2' },
          { label: 'Vessel 3', value: '3' },
          { label: 'Vessel 4', value: '4' },
          { label: 'Vessel 9', value: '9' },
          { label: 'Vessel 10', value: '10' },
          { label: 'Vessel 11', value: '11' },
          { label: 'Vessel 12', value: '12' }
        ]
      },
      {
        label: 'Fleet Group 2',
        key: 2,
        options: [
          { label: 'Vessel 5', value: '5' },
          { label: 'Vessel 6', value: '6' },
          { label: 'Vessel 7', value: '7' },
          { label: 'Vessel 8', value: '8' },
          { label: 'Vessel 13', value: '13' },
          { label: 'Vessel 14', value: '14' },
          { label: 'Vessel 15', value: '15' },
          { label: 'Vessel 16', value: '16' }
        ]
      }
    ]
  }
}

export const CascadingOptionsWithHiddenChildren = {
  args: {
    menuIsOpen: true,
    isMulti: true,
    captureMenuScroll: false,
    isSearchable: false,
    childEmptyMessage: 'No vessels found',
    hideChildren: true,
    options: [
      {
        label: 'Fleet Group 1',
        key: 1,
        options: [
          { label: 'Vessel 1', value: '1' },
          { label: 'Vessel 2', value: '2' },
          { label: 'Vessel 3', value: '3' },
          { label: 'Vessel 4', value: '4' },
          { label: 'Vessel 9', value: '9' },
          { label: 'Vessel 10', value: '10' },
          { label: 'Vessel 11', value: '11' },
          { label: 'Vessel 12', value: '12' }
        ]
      },
      {
        label: 'Fleet Group 2',
        key: 2,
        options: [
          { label: 'Vessel 5', value: '5' },
          { label: 'Vessel 6', value: '6' },
          { label: 'Vessel 7', value: '7' },
          { label: 'Vessel 8', value: '8' },
          { label: 'Vessel 13', value: '13' },
          { label: 'Vessel 14', value: '14' },
          { label: 'Vessel 15', value: '15' },
          { label: 'Vessel 16', value: '16' }
        ]
      }
    ]
  }
}

export const CasecadingSearchable = {
  args: {
    menuIsOpen: true,
    isMulti: true,
    captureMenuScroll: false,
    isSearchable: false,
    isClearable: false,
    backspaceRemovesValue:false,
    disableSelectAllGroups: true,
    customStyle: {
      checkbox: {
        child: 'primary'
      },
      control: {
        type: 'csi'
      }
    },
    childEmptyMessage: 'No vessels found',
    options: [
      {
        label: 'Fleet Group 1',
        key: 1,
        options: [
          { label: 'Vessel 1', value: '1' },
          { label: 'Vessel 2', value: '2' },
          { label: 'Vessel 3', value: '3' },
          { label: 'Vessel 4', value: '4' },
          { label: 'Vessel 9', value: '9' },
          { label: 'Vessel 10', value: '10' },
          { label: 'Vessel 11', value: '11' },
          { label: 'Vessel 12', value: '12' }
        ]
      },
      {
        label: 'Fleet Group 2',
        key: 2,
        options: [
          { label: 'Vessel 5', value: '5' },
          { label: 'Vessel 6', value: '6' },
          { label: 'Vessel 7', value: '7' },
          { label: 'Vessel 8', value: '8' },
          { label: 'Vessel 13', value: '13' },
          { label: 'Vessel 14', value: '14' },
          { label: 'Vessel 15', value: '15' },
          { label: 'Vessel 16', value: '16' }
        ]
      }
    ]
  }
}