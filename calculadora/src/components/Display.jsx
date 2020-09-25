import React from 'react';
import './Display.css';

function Display(props) {
  const { value } = props;
  return <div className="display">{value}</div>;
}

export default Display;
