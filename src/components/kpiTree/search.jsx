import React, { useState } from 'react';
import { useDidUpdateEffect } from '../../utils/hooks';
import SearchIcon from '../../icons/magnify.jsx';
import CloseIcon from '../../icons/close.jsx';
import styles from './index.module.scss';

const Search = (props) => {
  const { className, onSearchEnter, autoSearch, defaultValue, size = 'medium', ...rest } = props;
  const [search, setSearch] = useState(defaultValue || '');

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
        alt=""
        height={24}
        width={24}
        onClick={() => !autoSearch && onSearchEnter(search)}
      />
      <input
        aria-label="search"
        {...rest}
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onSearchEnter(search);
          }
        }}
      />
      {search?.length
        ? (
          <CloseIcon
            className={styles.close_icon}
            onClick={() => setSearch('')}
          />
        ) : null}
    </div>
  );
};

export default Search;
