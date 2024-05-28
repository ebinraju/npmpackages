import React from 'react';
import styles from './index.module.scss';

export const Switch = (props) => {
  const { onChange, checked, className = '', ...rest } = props;

  return (
    <label className={`${styles.toggle_switch} ${className} ${styles[className]}`}>
      <input type="checkbox" onChange={onChange} data-testid="toggle_switch" checked={checked} {...rest} />
      <div className={styles.toggle_switch_background}>
        <div className={styles.toggle_switch_handle} />
      </div>
    </label>
  );
};
