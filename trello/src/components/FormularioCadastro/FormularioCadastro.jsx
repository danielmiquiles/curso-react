import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.nota = "";
    this.categoria = "Sem categoria";
    this.state = {categorias:[]}
    this._novaCategorias = this._novaCategorias.bind(this)
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novaCategorias)
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novaCategorias)
  }

  _novaCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  handleMudancaTitulo(e) {
    e.stopPropagation();
    this.titulo = e.target.value;
  }

  handleMudancaNota(e) {
    e.stopPropagation();
    this.nota = e.target.value;
  }

  handleMudancaCategoria(e) {
    e.stopPropagation();
    this.categoria = e.target.value;
  }

  criarNota(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.criarNota(this.titulo, this.nota, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <select
          onChange={this.handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleMudancaNota.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
