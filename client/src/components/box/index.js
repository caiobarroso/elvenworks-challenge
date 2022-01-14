import React, { useEffect, useState } from "react";
import Celula from "../celula";

const Box = () => {
  const [recursos, setRecursos] = useState([]);

  const getRecursos = async () => {
    try {
      const response = await fetch("http://localhost:8001/recursos");
      const jsonData = await response.json();

      setRecursos(jsonData);
    } catch (e) {
      console.log(e);
    }
  };

  const apagarRecurso = async (id) => {
    var confirm = window.confirm("Deseja mesmo excluir ?");
    if (confirm) {
      try {
        const apagarRecurso = await fetch(
          `http://localhost:8001/recursos/${id}`,
          {
            method: "DELETE",
          }
        );

        setRecursos(recursos.filter((rec) => rec.id_operacao !== id));
      } catch (e) {
        console.log(e);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    getRecursos();
  }, []);

  return recursos.map((rec) => (
    <Celula
      nome={rec.nome_operacao}
      tipo={rec.tipo_operacao}
      data={rec.data_operacao}
      deletarRecurso={() => apagarRecurso(rec.id_operacao)}
    />
  ));
};

export default Box;
