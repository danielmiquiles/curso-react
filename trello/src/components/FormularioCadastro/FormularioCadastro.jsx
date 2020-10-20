import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props)
    this.titulo = ''
    this.nota = ''
  }

  handleMudançaTitulo(e){
    e.stopPropagation();
    this.titulo = e.target.value
  }
  
  handleMudançaNota(e){
    e.stopPropagation();
    this.nota = e.target.value
  }

  criarNota(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.criarNota(this.titulo, this.nota)
  }


  render() {
    return (
      <form 
      className="form-cadastro"
      onSubmit = {this.criarNota.bind(this)}
      >
        <select className="form-cadastro_input">
          <option>Selecione uma categoria</option>
          {
            this.props.categorias.map((categoria, index)=>{
              return(
              <option key={index} value={categoria}>{categoria}</option>
              )
            })
          }
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudançaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleMudançaNota.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
