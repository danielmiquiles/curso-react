import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

const DadosEntrega = ({ onSubmit }) => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({cep,endereco,numero,estado,cidade});
      }}
    >
      <TextField
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        variant="outlined"
        margin="normal"
        type="number"
        id="cep"
        name="cep"
        label="CEP"
      />
      <TextField
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        type="text"
        id="endereco"
        name="endereco"
        label="Endereço"
      />
      <TextField
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        variant="outlined"
        margin="normal"
        type="number"
        id="numero"
        name="numero"
        label="Nº"
      />
      <TextField
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        variant="outlined"
        margin="normal"
        type="text"
        id="estado"
        name="estado"
        label="Estado"
      />
      <TextField
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        variant="outlined"
        margin="normal"
        type="text"
        id="cidade"
        name="cidade"
        label="Cidade"
      />
      <Button variant="contained" fullWidth color="primary" type="submit">
        Finalizar Cadastro
      </Button>
    </form>
  );
};

export default DadosEntrega;
