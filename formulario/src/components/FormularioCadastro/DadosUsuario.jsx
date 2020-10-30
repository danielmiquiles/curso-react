import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import validacoesCadastro from '../../contexto/ValidacoesCadastro'
import useErros from "../../hooks/useErros";

const DadosUsuario = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(validacoesCadastro)

  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(possoEnviar()){
          onSubmit({email,senha});
        }
      }}
    >
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        type="email"
        id="email"
        name="email"
        label="Email"
        required
      />
      <TextField
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        id="password"
        name="senha"
        label="Senha"
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Proximo
      </Button>
    </form>
  );
};

export default DadosUsuario;
