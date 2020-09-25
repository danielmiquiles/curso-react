import React from 'react';
import './Button.css';

function Button(props) {
  const { label, operation, double, triple, click } = props;
  return (
    <button
      type="button"
      onClick={() => click && click(label)}
      className={`
    button
    ${operation ? 'operation' : ''}
    ${double ? 'double' : ''}
    ${triple ? 'triple' : ''}
    `}
    >
      {label}
    </button>
  );
}

export default Button;
