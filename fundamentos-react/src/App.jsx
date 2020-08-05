import React from 'react';
import './App.css';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';

export default _ =>

<div className="App">
    {document.title = "Fundamentos React"}
    <h1>Fundamentos React</h1>

    <div className="Cards">
        <Card titulo="Contador">
            <Contador valorInicial={100} passo={10}/>
        </Card>

        <Card titulo="Componente Controlado">
            <Input/>
        </Card>

        <Card titulo="Comunicação Indireta">
            <IndiretaPai/>
        </Card>

        <Card titulo="Comunicação Direta">
            <DiretaPai/>
        </Card>

        <Card titulo="Condicional">
            <ParOuImpar numero={4}/>
            <UsuarioInfo usuario={{nome: 'Daniel'}}/>
            <UsuarioInfo />
        </Card>

        <Card titulo="Tabela de Produtos">
            <TabelaProdutos/>
        </Card>

        <Card titulo="Lista Alunos">
            <ListaAlunos />
        </Card>

        <Card titulo="Com Filhos">
            <Familia sobrenome="Miquiles">
                <FamiliaMembro nome="Pedro" />
                <FamiliaMembro nome="Paulo" />
                <FamiliaMembro nome="Rebeca" />
            </Familia>
        </Card>

        <Card titulo="Desafio Aleatório" color="#080">
            <Aleatorio min={5} max={10} />
        </Card>

        <Card titulo="Fragmento">
            <Fragmento titulo="Opa" subtitulo="Opa"></Fragmento>
        </Card>

        <Card titulo="Com Parametro">
            <ComParametro titulo="Segundo Componente" subtitulo="Nice" />
        </Card>

        <Card titulo="Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
    </div>
</div>
