import React from "react";
import InderataFilho from "./InderataFilho";
import { useState } from "react";

export default (props) => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    function forneceInformacao(nomeParam, idadeParam, nerdParam) {
        console.log(nomeParam, idadeParam, nerdParam);
        setIdade(idadeParam)
        setNome(nomeParam)
        setNerd(nerdParam)
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd?'Verdadeiro':'Falso'}</span>
            </div>
            <InderataFilho quandoClicar={forneceInformacao}></InderataFilho>
        </div>
    );
};
