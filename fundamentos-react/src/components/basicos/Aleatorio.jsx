import React from 'react';

export default function Aleatorio(props){
    const { min, max } = props
    const random = parseInt(Math.random() * (max - min)) + min;
    return(
        <div>
            <h2>Aleatorio</h2>
            <p>
                { random }
            </p>
        </div>
    )
}