import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default ({ open, handleClose, submit, onChange, data, title }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <form className="form" onSubmit={submit}>
          <div>
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              value={data.nome}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Tipo"
              name='tipo'
              value={data.tipo}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="date"
              placeholder="Data"
              name='data'
              value={data.data}
              onChange={onChange}
            />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Voltar</Button>
      </DialogActions>
    </Dialog>
  );
};
