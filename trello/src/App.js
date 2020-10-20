import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    this.setState({ notas: [...this.state.notas, novaNota] });
  }

  deletar(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionaCategoria(categoria) {
    this.setState({ categorias: [...this.state.categorias, categoria] });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
        categorias={this.state.categorias}
        criarNota={this.criarNota.bind(this)} 
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionaCategoria={this.adicionaCategoria.bind(this)}
          />
          <ListaDeNotas
            apagarNota={this.deletar.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
