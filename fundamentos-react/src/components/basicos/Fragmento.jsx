import React, { Fragment } from 'react';

export default function Fragmento(props){
    return (
        <>
            <h2>{ props.titulo }</h2>
            <p>{ props.subtitulo }</p>
        </>
    )
}