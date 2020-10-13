import React from 'react';

export const CustomField = ({ name, content, fieldStyle }) => {
  const itemStyle = name === 'TOTAL' ? { ...fieldStyle.item, background: '#CCC', fontWeight: 'bold' } : fieldStyle.item;
  return (
    <div className="item-field" style={itemStyle}>
      <span style={fieldStyle.name}>{name}:</span>
      <span style={fieldStyle.content}>&nbsp;{content}</span>
    </div>
  );
};
