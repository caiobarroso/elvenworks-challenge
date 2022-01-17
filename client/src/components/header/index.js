import React, { useState } from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Modal from "../dialog";

const Header = () => {
  const [open, setOpen] = useState(false);

  const [values, setValues] = useState({ nome_operacao: "", data_operacao: "", tipo_operacao: "" });

  const submit = async (e) => {
    try {
      const response = await fetch("http://localhost:8001/recursos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="header">
      <input id="input" placeholder="Pesquisar" />
      <button id="add-btn">
        <FontAwesomeIcon icon={faPlus} onClick={handleClickOpen} />
      </button>
      <Modal
        open={open}
        handleClose={handleClose}
        title="Cadastrar"
        submit={submit}
        onChange={onChange}
        data={values}
      />
    </div>
  );
};

export default Header;
