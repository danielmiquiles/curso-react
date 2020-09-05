import React from 'react';

// import { Container } from './styles';

function PassoForm(props) {
  return (
    <div>
                    Passo:
                    <input type="number" value={props.passo} onChange={props.onchange}/>
                </div>

  );
}

export default PassoForm;