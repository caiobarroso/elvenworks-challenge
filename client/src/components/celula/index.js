import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  return (
    <div className="celula">
      <div className="info">
        <h1>{props.nome} - </h1>
        <h1>{props.tipo} - </h1>
        <h1> {props.data} </h1>
      </div>
      <div className="btn-area">
        <button id="edit-btn">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button id="delete-btn" onClick={props.deletarRecurso}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};
