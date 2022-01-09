import React, { useState } from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Header = () => {
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
      <input id="input" placeholder="Pesquisar" />
      <button id="add-btn">
        <FontAwesomeIcon icon={faPlus} onClick={handleClickOpen} />
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastrar</DialogTitle>
        <DialogContent>
          <form className="form" onSubmit={submit}>
            <div>
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Data"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Voltar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
