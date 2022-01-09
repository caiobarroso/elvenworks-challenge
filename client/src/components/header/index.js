import React, { useState } from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default () => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [data, setData] = useState("");

  const submit = async (e) => {
    try {
      const body = { nome, data, tipo };
      const response = await fetch("http://localhost:8001/recursos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <input id="input" placeholder="pesquisar" />
      <button id="add-btn">
        <FontAwesomeIcon icon={faPlus} onClick={handleClickOpen} />
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastrar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha todas as informações corretamente clique em em 'Enviar'.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="tipo"
            label="Tipo"
            type="text"
            fullWidth
            variant="standard"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="data"
            label="Data"
            type="date"
            fullWidth
            variant="standard"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Voltar</Button>
          <Button onClick={submit}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
