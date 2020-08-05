import React from "react";

export default (props) => (
    <div>
        <span>{props.nome} </span>
        <span>
            <strong>{props.numero}</strong>
        </span>
        <span> {props.bool? 'Verdadeiro' : 'Falso'}</span>
    </div>
);
