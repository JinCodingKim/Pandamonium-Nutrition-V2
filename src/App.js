import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import routes from "./routes.js";
import "./App.css";

const App = () => (
  <div className="App">
    <NavBar />
    {routes}
    <Footer />
  </div>
);

export default App;
