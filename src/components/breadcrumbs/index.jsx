import React, { Fragment } from 'react';
import ChevronRight from '../../icons/chevronRight.jsx';
import styles from './index.module.scss';

export const Breadcrumbs = (props) => {
  const { breadcrumbs = [], className = '', onItemClick } = props;
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {breadcrumbs.map((item, index) => (
        <Fragment
          key={item.key}
        >
          <div
            className={styles.label}
            onClick={() => {
              if (index < breadcrumbs?.length - 1 && onItemClick) {
                onItemClick(item);
              }
            }}
          >
            {item.label}
          </div>
          {index < breadcrumbs?.length - 1
            ? (
              <ChevronRight className={styles.devider} />
            ) : null}
        </Fragment>
      ))}
    </div>
  );
};
