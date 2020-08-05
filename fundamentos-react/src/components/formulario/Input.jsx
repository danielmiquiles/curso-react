import React from "react";
import { useState } from "react";
import './Input.css'
export default (props) => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        const text = e.target.value
        setValor(text)
    }
    
    return (
        <div className="Input" style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h2>{valor}</h2>
            <input type="text" value={valor} onChange={quandoMudar} name="" id=""/>
            <input type="text" value={valor} readOnly/>
            <input type="text" value={undefined}/>
        </div>
    );
};
