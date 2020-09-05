import React from "react";
import { useState } from "react";

// import { Container } from './styles';

function Mega(props) {
  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numeros;
  }

  console.log(gerarNumeros(7));

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  const [qtde, setQtde] = useState(props.qtde || 6)
  const numerosIniciais = Array(qtde).fill(0);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div>
      <h2>Mega</h2>
      <h3>{numeros.join(' ')}</h3>
      <div>
        Qtde de Números:
        <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)}/>
      </div>
      <button onClick={_=>setNumeros(gerarNumeros(qtde))}>
        Gerar Numeros
        </button>
    </div>
  );
}

export default Mega;
