import React from 'react';
import styles from './index.module.scss';

export const Pulse = (props) => {
  const { width = 20, height = 20, className = '' } = props;

  return (
    <div className={`${styles.pulse} ${className}`} style={{ width, height }} />
  );
};
