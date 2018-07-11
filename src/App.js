import React, { Fragment } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import routes from "./routes.js";

const App = () => (
  <Fragment>
    <NavBar />
    {routes}
    <Footer />
  </Fragment>
);

export default App;
