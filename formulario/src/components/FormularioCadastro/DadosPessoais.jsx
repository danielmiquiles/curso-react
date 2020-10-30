import React, { useContext, useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@material-ui/core";
import validacoesCadastro from '../../contexto/ValidacoesCadastro'
import useErros from "../../hooks/useErros";

function DadosPessoais({onSubmit}) {
  
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(validacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)


    

    
  
    function handleSetNome(e) {
      setNome(e.target.value);
    }
  
    function handleSetSobrenome(e) {
      setSobrenome(e.target.value);
    }
  
    function handleSetCpf(e) {
      setCpf(e.target.value);
    }
  
    function handleSetPromocoes(e) {
      setPromocoes(e.target.checked);
    }
  
    function handleSetNovidades(e) {
      setNovidades(e.target.checked);
    }
  
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        if(possoEnviar()){
          onSubmit({nome,sobrenome,cpf,promocoes,novidades})
        }
      }}>
        <TextField
          value={nome}
          onChange={(e) => handleSetNome(e)}
          onBlur={validarCampos}
          error={!erros.nome.valido}
          helperText={erros.nome.texto}
          id="nome"
          name="nome"
          label="Nome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={sobrenome}
          onChange={(e) => handleSetSobrenome(e)}
          id="sobrenome"
          name="sobrenome"
          label="Sobrenome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
        onBlur={validarCampos}
          value={cpf}
          onChange={(e) => handleSetCpf(e)}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          id="cpf"
          name="cpf"
          label="CPF"
          variant="outlined"
          margin="normal"
          fullWidth
        />
  
        <FormControlLabel
          control={
            <Switch
              checked={promocoes}
              onChange={(e) => handleSetPromocoes(e)}
              color="primary"
              name="promocoes"
            />
          }
          label="Promoções"
        />
        <FormControlLabel
          control={
            <Switch
              checked={novidades}
              onChange={(e) => handleSetNovidades(e)}
              color="primary"
              name="novidades"
            />
          }
          label="Novidades"
        />
        <Button variant="contained" color="primary" type="submit">
          Próximo
        </Button>
      </form>
    );
  }
export default DadosPessoais;