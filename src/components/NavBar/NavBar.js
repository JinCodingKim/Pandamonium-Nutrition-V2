import React, { Component } from "react";
import Pandamonium from "../../assets/img/pandamonium.svg";
import Search from "../../assets/img/search.svg";
import Cart from "../../assets/img/cart.svg";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div id="main-header">
        <div className="logo-container">
          <img src={Pandamonium} alt="Pandamonium" />
        </div>
        <div className="sub-nav-container">
          <div className="search">
            <img src={Search} alt="Search" />
          </div>
          <div className="cart">
            <img src={Cart} alt="Cart" />
          </div>
          <div id="burger-toggle">
            <input type="checkbox" checked="false" />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }
}
