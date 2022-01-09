const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/index'))

app.listen(8001, () => {
  console.log("ouvindo a porta 8001");
});
