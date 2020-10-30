import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validarCpf, validarSenha } from "./models/cadastro";
import validacoesCadastro from "./contexto/ValidacoesCadastro";

function App() {
  function onSubmitForm(dados) {
    console.log(dados);
  }

  return (
    <>
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <validacoesCadastro.Provider
          value={{
            cpf: validarCpf,
            senha: validarSenha,
            nome: validarSenha,
          }}
        >
          <FormularioCadastro onSubmit={onSubmitForm} />
        </validacoesCadastro.Provider>
      </Container>
    </>
  );
}

export default App;
