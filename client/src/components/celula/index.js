import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import Modal from "../dialog";

const Celula = ({ nome, tipo, data, deletarRecurso, id_operacao, recurso }) => {
  const [open, setOpen] = useState(false);

  const [newValues, setNewValues] = useState(recurso);

  const editarRecurso = async (id_operacao) => {
    try {
      const response = await fetch(
        `http://localhost:8001/recursos/${id_operacao}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newValues),
        }
      );

      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const calendario = new Date(data);

  const onChange = (e) =>
    setNewValues({ ...newValues, [e.target.name]: e.target.value });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(newValues);

  return (
    <div className="celula">
      <div className="info">
        <h1>{nome} - </h1>
        <h1>{tipo} - </h1>
        <h1> {calendario.toLocaleDateString("pt-br")} </h1>
      </div>
      <div className="btn-area">
        <button id="edit-btn">
          <FontAwesomeIcon icon={faEdit} onClick={handleClickOpen} />
        </button>
        <button id="delete-btn" onClick={deletarRecurso}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <Modal
          open={open}
          handleClose={handleClose}
          title="Editar"
          submit={() => editarRecurso(id_operacao)}
          onChange={onChange}
          data={recurso}
        />
      </div>
    </div>
  );
};

export default Celula;
