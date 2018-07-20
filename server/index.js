//IMPORT DEPENDENCIES
require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
//INITIALIZE APP
const app = express();
const port = process.env.PORT || 3001;
const productCtrl = require(`${__dirname}/controllers/product/productCtrl`);
//MASSIVE DB CONNECTION
massive(CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(console.log);

//MIDDLEWARES
app.use(json());
app.use(cors());

//ENDPOINTS
app.get("/api/products", productCtrl.getProducts);
app.get("/api/products/:name", productCtrl.getProductDetail);

//SERVER LISTENING
app.listen(port, () => console.log("Port listening on: " + port));
