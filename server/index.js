//IMPORT DEPENDENCIES
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

//INITIALIZE APP
const app = express();
const port = process.env.PORT || 3000;

//MIDDLEWARES
app.use(json());
app.use(cors());

//ENDPOINTS

//SERVER LISTENING
app.listen(port, () => console.log("Port listening on: " + port));
