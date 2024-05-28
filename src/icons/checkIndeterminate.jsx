import React from 'react';

const CheckIndeterminate = (props) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 0H3C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H15C16.6569 18 18 16.6569 18 15V3C18 1.34315 16.6569 0 15 0Z" />
      <path d="M13.5 9.75049H4.5C4.0859 9.75049 3.75 9.41459 3.75 9.00049C3.75 8.58639 4.0859 8.25049 4.5 8.25049H13.5C13.9141 8.25049 14.25 8.58639 14.25 9.00049C14.25 9.41459 13.9141 9.75049 13.5 9.75049Z" fill="white" />
    </svg>
  );
};

export default CheckIndeterminate;