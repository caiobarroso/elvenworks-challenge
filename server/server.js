const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const pool = require("./db");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// rotas

// criar recurso
app.post("/recursos", async (req, res) => {
  try {
    const { nome, data, tipo } = req.body;
    const novoRecurso = await pool.query(
      "INSERT INTO information (nome_operacao, data_operacao, tipo_operacao) VALUES($1,$2,$3) RETURNING *",
      [nome, data, tipo]
    );

    res.json(novoRecurso);
  } catch (e) {
    console.log(e);
  }
});
// pegar todos recursos
app.get("/recursos", async (req, res) => {
  try {
    const mostrarTodosRecursos = await pool.query("SELECT * from information");
    res.json(mostrarTodosRecursos.rows);
  } catch (e) {
    console.log(e);
  }
});
// selecionar um recurso especifico
app.get("/recursos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recursos = await pool.query(
      "SELECT * FROM information WHERE id_operacao = $1",
      [id]
    );
    res.json(recursos.rows[0]);
  } catch (e) {
    console.log(e);
  }
});

// editar/atualizar um recurso
app.put("/recursos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, data, tipo } = req.body;
    const editarRecurso = await pool.query(
      "UPDATE information SET nome_operacao = $1, data_operacao = $2, tipo_operacao = $3 WHERE id_operacao = $4",
      [nome, data, tipo, id]
    );

    res.json("atualizado!");
  } catch (e) {
    console.log(e);
  }
});

//deletar recurso
app.delete("/recursos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletarRecurso = await pool.query(
      "DELETE FROM information WHERE id_operacao = $1",
      [id]
    );
    res.json("deletado");
  } catch (e) {
    console.log(e);
  }
});

app.listen(8001, () => {
  console.log("ouvindo a porta 8001");
});
