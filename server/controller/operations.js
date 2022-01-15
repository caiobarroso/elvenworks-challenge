const pool = require("../db");

exports.criarRecurso = async (req, res) => {
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
};

exports.pegarTodosRecursos = async (req, res) => {
  try {
    const mostrarTodosRecursos = await pool.query("SELECT * from information");
    res.json(mostrarTodosRecursos.rows);
  } catch (e) {
    console.log(e);
  }
};
exports.editarRecurso = async (req, res) => {
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
};
exports.deletarRecurso = async (req, res) => {
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
};
exports.pegarTodosTipos = async (req, res) => {
  try {
    const mostrarTodosTipos = await pool.query("SELECT * from tipos");
    res.json(mostrarTodosTipos.rows);
  } catch (e) {
    console.log(e);
  }
};
