import React, { useState } from 'react';
import { useDidUpdateEffect } from '../../utils/hooks';
import SearchIcon from '../../icons/magnify.jsx';
import CloseIcon from '../../icons/close.jsx';
import styles from './index.module.scss';

export const Search = (props) => {
  const {
    className,
    allowClear,
    onSearchEnter,
    autoSearch,
    defaultValue,
    placeholder,
    pattern,
    size = 'medium',
    ...rest
  } = props;
  const [search, setSearch] = useState(defaultValue || "");

  useDidUpdateEffect(() => {
    let timeout;
    if (autoSearch) {
      timeout = setTimeout(() => {
        onSearchEnter(search);
      }, 500);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [search]);

  return (
    <div className={`${styles.search_input} ${className}`}>
      <SearchIcon
        data-testid="search-icon"
        alt=""
        height={24}
        width={24}
        onClick={() => !autoSearch && onSearchEnter(search)}
      />
      <input
        aria-label="search"
        {...rest}
        placeholder={placeholder || "Search"}
        value={search}
        onChange={(event) => {
          const inputValue = event.target.value;
          if (!pattern || new RegExp(pattern).test(inputValue)) {
            setSearch(inputValue);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onSearchEnter(search);
          }
        }}
      />
      {search && allowClear && (
        <CloseIcon
          onClick={() => {
            if (allowClear) setSearch('');
          }}
          className={styles.search_clear_icon}
          alt=""
          height={12}
          width={12}
        />
      )}
    </div>
  );
};
