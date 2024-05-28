import React, { useMemo, useRef } from 'react';
import { components } from 'react-select';
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion';
import _ from 'lodash';
import CaretDownIcon from '../../icons/caretDown.jsx';
import { Checkbox } from '../checkbox/index.jsx';
import { Empty } from '../empty/index.jsx';
import styles from './index.module.scss';
import { MultiSelectMenuList } from './multiSelectMenuList.jsx';

const Group = (props) => {
  const { option, selectOption, selectProps, value = [], setValue, childEmptyMessage } = props;
  const { customStyle, hideChildren, classNamePrefix} = selectProps;
  const isAllOptionsChecked = useMemo(() => {
    return option.options?.length && option.options.every((item) => !!value?.find((foo) => foo.value === item.value));
  }, [value, option]);

  const isSomeOptionsChecked = useMemo(() => {
    return option.options?.length && option.options.some((item) => !!value?.find((foo) => foo.value === item.value));
  }, [value, option]);

  const isOptionSelected = (op) => {
    return !!value?.find((item) => item.value === op.value);
  };

  const selectAll = (event) => {
    if (!event.target.checked) {
      const copy = [...value];
      _.remove(copy, (item) => !!option.options.find((op) => item.value === op.value));
      setValue(copy);
    } else {
      const newValue = _.unionBy(value, option.options, (item) => item.value);
      setValue(newValue);
    }
  };
  const classNameGroupContent = `${styles.group_content} ${classNamePrefix ? styles[`${classNamePrefix}_group_content`] : ''}`;
  const classNameGroupItem = `${styles.group_option_item} ${classNamePrefix ? styles[`${classNamePrefix}_group_option_item`] : ''}`;
  return (
    !hideChildren
      ? (
        <>
          <Header>
            <Trigger className={styles.group_header_wrapper}>
              <div className={styles.group_header}>
                <Checkbox
                  aria-label={option.label}
                  readOnly
                  color={customStyle?.checkbox?.parent || 'primary'}
                  checked={isAllOptionsChecked}
                  indeterminate={!isAllOptionsChecked && isSomeOptionsChecked}
                  onClick={selectAll}
                />
                {option.label}
              </div>
              <CaretDownIcon className={styles.group_header_icon} />
            </Trigger>
          </Header>
          <Content className={classNameGroupContent}>
            {option.options?.length
              ? option.options?.map((item) => (
                <div
                  key={item.value}
                  className={classNameGroupItem}
                  onClick={() => {
                    selectOption(item);
                  }}
                  role="option"
                >
                  <Checkbox
                    aria-label={item.label}
                    readOnly
                    color={customStyle?.checkbox?.child || ''}
                    checked={isOptionSelected(item)}
                    onClick={() => selectOption(item)}
                  />
                  {item.label}
                </div>
              ))
              : (
                <Empty title={childEmptyMessage} />
              )}
          </Content>
        </>
      )
      : (
        <div
          className={`${styles.group_header_wrapper} ${styles.is_hidden}`}
          onClick={() => {
            selectAll({ target: { checked: !isAllOptionsChecked } })
          }}
        >
          <div
            className={styles.group_header}
          >
            <Checkbox
              aria-label={option.label}
              readOnly
              color={customStyle?.checkbox?.parent || 'primary'}
              checked={isAllOptionsChecked}
              indeterminate={!isAllOptionsChecked && isSomeOptionsChecked}
              onClick={selectAll}
            />
            {option.label}
          </div>
        </div>
      )
  );
};

export const AccordionGroup = (props) => {
  const {
    selectOption, selectProps, setValue, options, disableSelectAllGroups = false, ...rest
  } = props;

  const { value, classNamePrefix, filterOption, inputValue, isSearchable} = selectProps;

  const flatOptions = useMemo(() => {
    return _.flatten(options.map((item) => item.options));
  }, [options]);

  const filteredOptions = useMemo(() => {
    if (isSearchable && inputValue && options?.length) {
      return options.map((group) => {
        const option = group?.options?.filter((item) => filterOption({...item, data: options}, inputValue));
        return { ...group, options: option };
      });
    }
    return options;
  }, [options, inputValue, isSearchable]);

  const selectAll = () => {
    if (flatOptions?.length === value?.length) {
      setValue([]);
    } else {
      setValue(flatOptions);
    }
  };

  const className = `${styles.menu_list_select_all} ${classNamePrefix ? styles[`${classNamePrefix}_menu_list_select_all`] : ''}`;

  return (
    <>
      {!disableSelectAllGroups && <div
        className={className}
      >
        <Checkbox
          aria-label="select-all"
          color="primary"
          checked={flatOptions?.length && flatOptions?.length === value?.length}
          indeterminate={value?.length > 0 && value?.length < flatOptions?.length}
          readOnly
          onClick={selectAll}
        />
        Select All
      </div>}
      <Root
        className={styles.groups_wrapper}
        defaultValue={(filteredOptions?.length && filteredOptions[0]?.key) || 1}
        collapsible
      >
        {filteredOptions?.map((option, index) => (
          <Item
            key={option.key || index + 1}
            value={option.key || index + 1}
            className={styles.group}
          >
            <Group
              option={option}
              selectOption={selectOption}
              value={value}
              setValue={setValue}
              childEmptyMessage={selectProps?.childEmptyMessage}
              selectProps={selectProps}
            />
          </Item>
        ))}
      </Root>
    </>
  );
};

const MenuList = (props) => {
  const { children, options, selectProps , ...rest } = props;
  const { disableSelectAllGroups, classNamePrefix} = selectProps;
  const hasGroupedOptions = useMemo(() => {
    return !!options.find((item) => Object.hasOwn(item, 'options'));
  }, [options]);
  const className = `${styles.menu_list} ${hasGroupedOptions 
    ? styles.collapsible : ''} ${classNamePrefix ? styles[`${classNamePrefix}_menu_list`] : ''}`;
    const searchRef = useRef(null);
  return (
    <components.MenuList
      {...rest}
      className={className}
    >
      <div onClick={(event) => event.stopPropagation()}>
        {!rest.isMulti
          ? children
          : hasGroupedOptions ? (
            <AccordionGroup
              {...props}
              hasGroupedOptions={hasGroupedOptions}
              disableSelectAllGroups={disableSelectAllGroups && hasGroupedOptions}
            />
          ) : <MultiSelectMenuList {...props} />}
      </div>
    </components.MenuList>      
  );
};

export default MenuList;
