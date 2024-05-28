import React from 'react';
import styles from './index.module.scss';

export const Button = (props) => {
  const { children, type = "primary", size = "small", className = '', disabled, ...rest } = props;

  return (
    <button type="button" className={`${styles.button} ${styles[type]} ${className} ${disabled && styles.disabled} ${styles[size]}`} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
