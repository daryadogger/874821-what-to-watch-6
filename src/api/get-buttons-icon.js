import React from 'react';

const getButtonsIcon = (status) => {
  if (status) {
    return (
      <svg viewBox="0 0 18 14" width={18} height={14}>
        <use xlinkHref="#in-list"></use>
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref="#add" />
      </svg>
    );
  }
};

export default getButtonsIcon;
