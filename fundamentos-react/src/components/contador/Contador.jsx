import React, { Component } from "react";
import './Contador.css'
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

class Contador extends Component {
    state = {
        valorInicial: this.props.valorInicial || 0,
        passo: this.props.passo || 1,
    };

    inc = () => {
        this.setState({
            valorInicial: this.state.valorInicial + this.state.passo
        })
    }
    dec = () => {
        this.setState({
            valorInicial: this.state.valorInicial - this.state.passo
        })
    }

    handleSetPasso = (event) =>{
        this.setState({
            passo: +event.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                
                <Display valorInicial={this.state.valorInicial}></Display>
                <PassoForm passo={this.state.passo} onchange={this.handleSetPasso}></PassoForm>
                <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>
        
            </div>
        );
    }
}

export default Contador;
