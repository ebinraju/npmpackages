import React, { useState } from 'react';
import { AccordionGroup } from './accordionGroup.jsx';
import { useDidUpdateEffect } from '../../utils/hooks';
import styles from './index.module.scss';

const SORT_OPTIONS = {
  ASC: 'ASC',
  DESC: 'DESC'
};

export const GroupedSelect = (props) => {
  const {
    options = [], className = '', onChange, value: valueProp,
    defaultSort = SORT_OPTIONS.ASC, onSort, emptyMessage = '',
    childEmptyMessage = '', showComment, onCommentClick, formatIndexValue,
    isSingle, ...rest
  } = props;

  const [value, setValue] = useState(valueProp || []);
  const [sort, setSort] = useState(defaultSort);

  const selectOption = (option) => {
    if (isSingle) return setValue([option]);
    setValue((prev) => {
      const copy = valueProp ? [...valueProp] : [...prev];
      const index = copy.findIndex((item) => option.value === item.value);
      if (index > -1) {
        copy.splice(index, 1);
      } else {
        copy.push(option);
      }
      return copy;
    });
  };

  const onSortClick = () => {
    setSort((prev) => {
      if (prev === SORT_OPTIONS.ASC) {
        return SORT_OPTIONS.DESC;
      } else {
        return SORT_OPTIONS.ASC;
      }
    });
  };

  const setValHandler = (val) =>{
    if(isSingle && val.length > 1)
     return null;
    return setValue(val);
  }
  
  useDidUpdateEffect(() => {
    if (onChange) onChange(value);
  }, [value]);

  useDidUpdateEffect(() => {
    if (onSort) onSort(sort);
  }, [sort]);

  return (
    <div className={`${styles.menu_list} ${styles.collapsible} ${className}`}>
      <AccordionGroup
        options={options}
        selectProps={{
          value: valueProp || value,
        }}
        setValue={setValHandler}        
        selectOption={selectOption}
        onSortClick={onSortClick}
        sortOrder={sort}
        emptyMessage={emptyMessage}
        childEmptyMessage={childEmptyMessage}
        showComment={showComment}
        onCommentClick={onCommentClick}
        formatIndexValue={formatIndexValue}
        {...rest}
      />
    </div>
  );
};
