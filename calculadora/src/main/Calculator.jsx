import React from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

function Calculator(props) {

  function clearMemory(){
    console.log('limpar');
  }
  function setOperation(operation){
    console.log(operation)
  }
  function addDigit(n){
    console.log(n);
  }


  return (
    <div className="Calculator">
      <Display value={100} />
      <Button label="AC" click={e => clearMemory()} triple />
      <Button label="/" click={e=>setOperation(e)} operation />
      <Button label="7" click={e=>addDigit(e)}/>
      <Button label="8" />
      <Button label="9" />
      <Button label="*" operation />
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" operation />
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" operation />
      <Button label="0" double />
      <Button label="." />
      <Button label="=" operation />

    </div>

  )
}

export default Calculator;
