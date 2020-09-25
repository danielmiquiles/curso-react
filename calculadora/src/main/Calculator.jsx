/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
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

export default class Calculator extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = this.state.operation === '=';
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]}${currentOperation}${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  addDigit(n) {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const newDisplayValue = currentValue + n;

    this.setState({
      displayValue: newDisplayValue,
      clearDisplay: false,
    });

    if (n !== '.') {
      const i = this.state.current;
      const newValue = parseFloat(newDisplayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({
        values,
      });
      console.log(values);
      console.log(this.state);
    }
  }

  render() {
    return (
      <div className="Calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={() => this.clearMemory()} triple />
        <Button label="/" click={(e) => this.setOperation(e)} operation />
        <Button label="7" click={(e) => this.addDigit(e)} />
        <Button label="8" click={(e) => this.addDigit(e)} />
        <Button label="9" click={(e) => this.addDigit(e)} />
        <Button label="*" operation click={(e) => this.setOperation(e)} />
        <Button label="4" click={(e) => this.addDigit(e)} />
        <Button label="5" click={(e) => this.addDigit(e)} />
        <Button label="6" click={(e) => this.addDigit(e)} />
        <Button label="-" operation click={(e) => this.setOperation(e)} />
        <Button label="1" click={(e) => this.addDigit(e)} />
        <Button label="2" click={(e) => this.addDigit(e)} />
        <Button label="3" click={(e) => this.addDigit(e)} />
        <Button label="+" operation click={(e) => this.setOperation(e)} />
        <Button label="0" double click={(e) => this.addDigit(e)} />
        <Button label="." click={(e) => this.addDigit(e)} />
        <Button label="=" operation click={(e) => this.setOperation(e)} />
      </div>
    );
  }
}

// function Calculator() {
//   const [initial, setInitial] = useState(initialState);

//   function clearMemory() {
//     setInitial(initialState);
//   }

//   function setOperation(operation) {
//     console.log(operation);
//   }

//   function addDigit(n) {
//     console.log(initial);

//     if (n === '.' && initial.displayValue.includes('.')) {
//       return;
//     }

//     const clearDisplay = initial.displayValue === '0' || initial.clearDisplay;
//     const currentValue = clearDisplay ? '' : initial.displayValue;
//     const newDisplayValue = currentValue + n;

//     setInitial({
//       ...initial,
//       displayValue: newDisplayValue,
//       clearDisplay: false,
//     });

// if (n !== '.') {
//   const i = initial.current;
//   const newValue = parseFloat(newDisplayValue);
//   const values = [...initial.values];
//   values[i] = newValue;
//   setInitial({
//     values,
//   });
// }
// }

// }

// export default Calculator;
