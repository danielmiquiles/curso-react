import React, { useState } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

function Calculator() {
  const [initial, setInitial] = useState(initialState);

  function clearMemory() {
    setInitial(initialState);
  }

  function setOperation(operation) {
    console.log(operation);
  }

  function addDigit(n) {
    if (n === '.' && initial.displayValue.includes('.')) {
      return;
    }

    const clearDisplay = initial.displayValue === '0' || initial.clearDisplay;
    const currentValue = clearDisplay ? '' : initial.displayValue;
    const newDisplayValue = currentValue + n;

    setInitial({
      displayValue: newDisplayValue,
      clearDisplay: false,
    });

    if (n !== '.') {
      const i = initial.current;
      const newValue = parseFloat(newDisplayValue);
      const values = [...initial.values];
      values[i] = newValue;
      setInitial({
        values,
      });
    }

    console.log(initial);
  }

  return (
    <div className="Calculator">
      <Display value={initial.displayValue} />
      <Button label="AC" click={() => clearMemory()} triple />
      <Button label="/" click={(e) => setOperation(e)} operation />
      <Button label="7" click={(e) => addDigit(e)} />
      <Button label="8" click={(e) => addDigit(e)} />
      <Button label="9" click={(e) => addDigit(e)} />
      <Button label="*" operation click={(e) => setOperation(e)} />
      <Button label="4" click={(e) => addDigit(e)} />
      <Button label="5" click={(e) => addDigit(e)} />
      <Button label="6" click={(e) => addDigit(e)} />
      <Button label="-" operation click={(e) => setOperation(e)} />
      <Button label="1" click={(e) => addDigit(e)} />
      <Button label="2" click={(e) => addDigit(e)} />
      <Button label="3" click={(e) => addDigit(e)} />
      <Button label="+" operation click={(e) => setOperation(e)} />
      <Button label="0" double click={(e) => addDigit(e)} />
      <Button label="." click={(e) => addDigit(e)} />
      <Button label="=" operation click={(e) => setOperation(e)} />
    </div>
  );
}

export default Calculator;
