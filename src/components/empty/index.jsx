import React from 'react';
import styles from './index.module.scss';
import NoData from '../../icons/noData.jsx';

export const Empty = (props) => {
  const { title, className = '' } = props;
  return (
    <div className={`${styles.empty} ${className}`}>
      <NoData />
      {title}
    </div>
  );
};
