import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="main-home">
        <div className="home-img">
          <h1>
            WELCOME
            <br />
            <span>TO THE</span>
            <br />
            JUNGLE
          </h1>
          <button>JOIN PANDAMONIUM</button>
        </div>
      </div>
    );
  }
}
export default Home;
