import React from 'react';
import _ from 'lodash';
import { Empty } from '../empty/index.jsx';
import styles from './index.module.scss';
import { Checkbox } from '../checkbox/index.jsx';

export const MultiSelectMenuList = (props) => {
  const { selectOption, selectProps, setValue, options, ...rest } = props;
  const { value, childEmptyMessage = 'No options', customStyle } = selectProps;
  const selectAll = () => {
    if (options?.length === value?.length) {
      setValue([]);
    } else {
      setValue(options);
    }
  };

  const isOptionSelected = (op) => {
    return !!value?.find((item) => item.value === op.value);
  };

  return (
    <div className={`${styles.multi_item_wrapper}`}>
      {options.length
        ? (
          <>
            <div className={styles.multi_item} onClick={selectAll}>
              <Checkbox
                aria-label="select-all"
                color="primary"
                checked={options?.length && options?.length === value?.length}
                indeterminate={value?.length > 0 && value?.length < options?.length}
                readOnly
                onClick={selectAll}
              />
              All
            </div>

            {options?.map((item) => (
              <MultiSelectMenuItem
                item={item}
                key={item.value}
                color={customStyle?.child || 'primary'}
                selectOption={selectOption}
                isOptionSelected={isOptionSelected(item)}
              />
            ))}
          </>
        ) : (
          <Empty title={childEmptyMessage} />
        )}
    </div>
  );
};

const MultiSelectMenuItem = ({ item, isOptionSelected, selectOption, color }) => {

  return (
    <div
      className={`${styles.multi_item} ${isOptionSelected ? styles.active : ""
        }`}
      onClick={() => selectOption(item)}
    >
      <div>
        <Checkbox
          color={color}
          aria-label={item.label}
          readOnly
          checked={isOptionSelected}
          onClick={() => selectOption(item)}
        />
      </div>
      <div>{item.label}</div>
    </div>
  );
};
