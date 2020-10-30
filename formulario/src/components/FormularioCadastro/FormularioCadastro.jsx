import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ onSubmit, validacoes }) {
  const [formAtual, setFormAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (formAtual === forms.length - 1) onSubmit(dadosColetados);
  });

  const forms = [
    <DadosUsuario onSubmit={coletarDados} />,
    <DadosPessoais onSubmit={coletarDados} />,
    <DadosEntrega onSubmit={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro </Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setFormAtual(formAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={formAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalizado </StepLabel>
        </Step>
      </Stepper>

      {forms[formAtual]}
    </>
  );
}

export default FormularioCadastro;
