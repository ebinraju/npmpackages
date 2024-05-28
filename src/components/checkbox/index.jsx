import React, { useEffect, useRef, useState } from 'react';
import CheckIcon from '../../icons/checkFilledRound.jsx';
import styles from './index.module.scss';
import CheckIndeterminate from '../../icons/checkIndeterminate.jsx';

export const Checkbox = (props) => {
  const {
    className = '', color, checked: checkedProp, onClick, label = '', size = 'large',
    indeterminate, ...rest
  } = props;

  const [checked, setChecked] = useState(checkedProp);
  const ref = useRef();

  useEffect(() => {
    setChecked(checkedProp);
  }, [checkedProp]);

  useEffect(() => {
    if (ref?.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={`${styles.checkbox_wrapper} ${styles[size]} ${color === 'primary' ? styles.primary : ''} ${className}`}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        if (onClick) {
          onClick({
            target: { checked: !checked }
          });
        }
        if (checkedProp === undefined) setChecked(!checked);
      }}
    >
      <input type="checkbox" {...rest} checked={checked} ref={ref} />
      <div className={styles.checkbox}>
        {indeterminate
          ? <CheckIndeterminate />
          : <CheckIcon />}
      </div>
      {label}
    </label>
  );
};
