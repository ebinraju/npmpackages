import React from 'react';
import { Modal as RespModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from './index.module.scss';
import CloseIcon from '../../icons/close.jsx';

export const Modal = (props) => {
  const { children, title = '', onClose, open, classNames = {}, ...rest } = props;

  const closeModal = () => {
    if (onClose) onClose();
  };

  return (
    <RespModal
      open={open}
      center
      showCloseIcon={false}
      classNames={{
        ...classNames,
        overlay: `${styles.overlay} ${classNames?.overlay || ''}`,
        modal: `${styles.modal} ${classNames?.modal || ''}`
      }}
      onClose={onClose}
      {...rest}
    >
      <div className={styles.header}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.close_icon} onClick={closeModal}>
          <CloseIcon />
        </div>
      </div>
      {children}
    </RespModal>
  );
};
