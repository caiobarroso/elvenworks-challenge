import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import "./styles.css";

export default ({ open, handleClose, submit, onChange, data, title }) => {
  const [tipos, setTipos] = useState([]);

  const getTipos = async () => {
    try {
      const response = await fetch("http://localhost:8001/tipos");
      const jsonData = await response.json();

      setTipos(jsonData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTipos();
  }, []);


  console.log(data)

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
              onChange={onChange}
              autoComplete="off"
              value={data.nome_operacao}
            />
          </div>
          <div>
            <select onChange={onChange} name="tipo" id="custom-select" value={data.tipo_operacao}>
              <option disabled selected>
                selecione uma opção
              </option>
              {tipos.map((tipos) => (
                <option>{tipos.tipo}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="date"
              placeholder="Data"
              name="data"
              onChange={onChange}
              autoComplete="off"
              value={data.data_operacao}
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
