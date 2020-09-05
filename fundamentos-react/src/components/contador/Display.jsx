import React from 'react';

// import { Container } from './styles';

function Display(props) {
    return <>
            <h2>Contador</h2>
            <h3>{props.valorInicial}</h3>
        </>;
}

export default Display;