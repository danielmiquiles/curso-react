import React from 'react';
import PassoForm from './PassoForm';

function Botoes(props) {
  return (
      <>
        <button onClick={props.decrementar}>-</button>
        <button onClick={props.incrementar}>+</button>
      </>
  );
}

export default Botoes;