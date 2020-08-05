import React from "react";

export default (props) => {
    const min = 40
    const max = 80

    const gerarIdade = () => parseInt(Math.random() * (max-min))+min

    const cb =props.quandoClicar
    return (
        <div>
            <div>Filho</div>
            {/* Nunca executar diretamente uma função passada por outro componente, precisa executar uma função pra isso como acontece abaixo */}
            <button onClick={_ => cb('Marlon', gerarIdade(), false)}>Fornece Informações</button>
        </div>
    )
};
