import React from 'react';
import ReactTooltip from "rc-tooltip";
import styles from "./index.module.scss";
import "rc-tooltip/assets/bootstrap_white.css";

export const Tooltip = ({ children, title = '', ...props }) => {
  return (
    <ReactTooltip
      overlayClassName={styles.wrapper}
      overlay={title}
      {...props}
    >
      {children}
    </ReactTooltip>
  );
};
