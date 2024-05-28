import React, { useMemo } from 'react';
import ReactSelect, { components } from 'react-select';
import MenuList from './menuList.jsx';
import CaretDownIcon from '../../icons/caretDown.jsx';
import CheckCircleIcon from '../../icons/checkCircle.jsx';
import styles from './index.module.scss';

const SelectContainer = (props) => {
  const { children, className = '', ...rest } = props;

  return (
    <components.SelectContainer
      {...rest}
      className={`${styles.select_container} ${className}`}
    >
      {children}
    </components.SelectContainer>
  );
};

const Control = (props) => {
  const { children, ...rest } = props;
  const { selectProps } = rest;
  return (
    <components.Control
      {...rest}
      className={`${styles.control} ${selectProps?.size === 'small' ? styles.small : ''}`}
    >
      {children}
    </components.Control>
  );
};

const ValueContainer = (props) => {
  const { children, ...rest } = props;

  const { selectProps } = rest;
  const { value, options, hideChildren } = selectProps;

  const hasGroupedOptions = useMemo(() => {
    return !!options.find((item) => item.options?.length);
  }, [options]);

  const selectedGroups = useMemo(() => {
    if (hasGroupedOptions) {
      return options.filter((group) =>
        group.options.some((item) =>
          value?.find((foo) => foo.value === item.value)
        )
      );
    }
    return null;
  }, [value, options, hasGroupedOptions]);

  const renderValue = (value) => {
    let returnLabel;
    if (!value?.length) {
      returnLabel = null;
    } else if (value?.length < 2) {
      returnLabel = value[0].label;
    } else {
      returnLabel = `${value?.length} Selected`;
    }
    return (
      <div className={styles.input_wrapper}>
        {children}
        { returnLabel 
          ? <div className={styles.single_value} title={returnLabel}>
              {returnLabel}
            </div>
          : null }
      </div>
    )
  };

  return (
    <components.ValueContainer {...rest} className={styles.value_container}>
      {
        selectProps.isMulti ? (
          renderValue(hasGroupedOptions && hideChildren ? selectedGroups : value)
        ) : (
          <div className={styles.input_wrapper}>{children}</div>
        )
      }
    </components.ValueContainer>
  );
};

const MultiValue = (props) => {
  const { children, ...rest } = props;
  return null;
};

const Input = (props) => {
  const { children, ...rest } = props;

  return (
    <components.Input {...rest} className={styles.input}>
      {children}
    </components.Input>
  );
};

const Placeholder = (props) => {
  const { children, ...rest } = props;

  return (
    <components.Placeholder {...rest} className={styles.placeholder}>
      {children}
    </components.Placeholder>
  );
};

const SingleValue = (props) => {
  const { children, ...rest } = props;

  return (
    <components.SingleValue {...rest} className={styles.single_value}>
      {children}
    </components.SingleValue>
  );
};

const DropdownIndicator = (props) => {
  const { ...rest } = props;

  return (
    <components.DropdownIndicator {...rest} className={styles.dropdown_indicator}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props) => {
  const { children, ...rest } = props;

  return (
    <div onClick={(event) => event.stopPropagation()} title="Clear selection">
      <components.ClearIndicator {...rest} className={styles.clear_indicator}>
        {children}
      </components.ClearIndicator>
    </div>
  );
};

const Menu = (props) => {
  const { children, ...rest } = props;
  return (
    <components.Menu {...rest} className={styles.menu}>
      {children}
    </components.Menu>
  );
};

const Option = (props) => {
  const { children, selectProps, ...rest } = props;
  const { classNamePrefix } = selectProps;
  const className = `${styles.option} ${classNamePrefix ? styles[`${classNamePrefix}_option`] : ''}`;
  return (
    <components.Option {...rest} className={className}>
      {children}
      <CheckCircleIcon />
    </components.Option>
  );
};

export const Select = (props) => {
  const { components: componentsProp = {}, onChange, ...rest } = props;

  return (
    <ReactSelect
      {...rest}
      onChange={(value) => {
        if (onChange) onChange(value);
      }}
      styles={{
        indicatorSeparator: () => ({ display: 'none' })
      }}
      components={{
        SelectContainer,
        Control,
        ValueContainer,
        Input,
        DropdownIndicator,
        SingleValue,
        MultiValue,
        Menu,
        MenuList,
        Option,
        Placeholder,
        ClearIndicator,
        ...componentsProp
      }}
    />
  );
};
