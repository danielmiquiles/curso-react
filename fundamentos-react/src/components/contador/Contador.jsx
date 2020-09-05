import React, { Component } from "react";
import './Contador.css'

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
                <h2>Contador</h2>
                <h3>{this.state.valorInicial}</h3>
                <div>
                    Passo:
                    <input type="number" value={this.state.passo} onChange={this.handleSetPasso}/>
                </div>
                
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                
            </div>
        );
    }
}

export default Contador;
