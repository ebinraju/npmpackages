import React, { useState } from 'react';
import { useDidUpdateEffect } from '../../utils/hooks';
import CheckIcon from '../../icons/check.jsx';
import CloseIcon from '../../icons/close.jsx';
import styles from './index.module.scss';

export const Input = (props) => {
  const {
    expression,
    className,
    onChange,
    onClear,
    defaultValue,
    showClearButton,
    showConfirmButton,
    ...rest
  } = props;
  const [value, setValue] = useState(defaultValue || '');

  const clearBtnHandler = () => {
    setValue(defaultValue || '');
    if (onClear) onClear();
  };
  const confirmBtnHandler = () => {
    if (showConfirmButton) onChange(value);
  };

  const onChangeHandler = (e) => {
    const val = e.target.value;
    if (!expression) return setValue(val);
    if (expression.test(val)) return setValue(val);
  };

  useDidUpdateEffect(() => {
    if (!showConfirmButton) onChange(value);
  }, [value]);

  return (
    <div className={`${styles.input_wrapper} ${className}`}>
      <input
        aria-label="input"
        placeholder="Type..."
        {...rest}
        value={value}
        onChange={onChangeHandler}
      />
      <div className={styles.control_wrapper}>
        {showClearButton && value && (
          <div onClick={clearBtnHandler}>
            <CloseIcon className={styles.close_icon} />
          </div>
        )}

        {showConfirmButton && defaultValue !== value && (
          <div onClick={confirmBtnHandler}>
            <CheckIcon className={styles.check_icon} />
          </div>
        )}
      </div>
    </div>
  );
};
