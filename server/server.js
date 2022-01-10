const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config({ path: './.env' });
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/index'))

app.listen(8001, () => {
  console.log("ouvindo a porta 8001");
});
