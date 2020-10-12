import React from 'react';

export const TitleDivider = ({ text }) => {
  return (
    <div className="divider">
      <hr className="line"></hr>
      <div className="title">{text}</div>
    </div>
  );
};
