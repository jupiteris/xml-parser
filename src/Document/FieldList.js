import React from 'react';
import { CustomField } from './CustomField';

export const FieldList = ({ title, data, dataStyle }) => {
  return (
    <div className="data-list">
      <span className="header">{title ?? ''}</span>
      {data &&
        data.length &&
        data.map((d, index) => (
          <CustomField key={index} name={d.name} content={d.content} fieldStyle={dataStyle} />
        ))}
    </div>
  );
};
