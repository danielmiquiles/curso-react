import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

// let num = [4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];
// let totalItems = 10;
// let items = [];
// let arr = [];
// let pares, impares;

// for (let i = 0; i < totalItems; i++) {
//   items.push(parseInt(num[i]));

//   pares = items
//     .filter((item) => {
//       return item % 2 === 0;
//     })
//     .sort((n1, n2) => n1 - n2);

//   impares = items
//     .filter((item) => {
//       return item % 2 !== 0;
//     })
//     .sort((n1, n2) => n2 - n1);
// }

// arr.push(...pares);
// arr.push(...impares);
// for (let i = 0; i < totalItems; i++) {
//   console.log(arr[i]);
// }

// let pares = items.filter((item) => {
//   return item % 2 === 0;
// }).sort((n1, n2)=> n1 - n2);

// let impares = items.filter((item) => {
//   return item % 2 !== 0;
// }).sort((n1,n2)=> n2- n1);

// arr.push(pares)
// arr.push(impares)

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            adicionaCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
