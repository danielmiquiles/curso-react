import React, { Component } from "react";

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

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.valorInicial}</h3>
                <div>
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                </div>
            </div>
        );
    }
}

export default Contador;
