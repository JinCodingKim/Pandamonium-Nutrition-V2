import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Pandamonium from "../../assets/img/pandamonium.svg";
import Search from "../../assets/img/search.svg";
import Cart from "../../assets/img/cart.svg";
import Down from "../../assets/img/chevron-down.svg";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    openMain: false,
    openSub: false
  };
  toggleMenu = val =>
    this.setState(currentState => ({ [val]: !currentState[val] }));
  render() {
    const { openMain, openSub } = this.state;
    const menu = () => this.toggleMenu("openMain");
    const subMenu = () => this.toggleMenu("openSub");
    return (
      <Fragment>
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
              <input type="checkbox" checked={openMain} onClick={menu} />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <ul id={openMain ? "open-main" : "close-main"}>
          <li>
            <Link to="/shop" onClick={menu}>
              <p className="menu-item">Shop</p>
            </Link>
            <img
              onClick={subMenu}
              className={openSub ? "icon-active" : ""}
              src={Down}
              alt="Down"
            />
          </li>
          <ul id={openSub ? "open-sub" : "close-sub"}>
            <li className="menu-item">Supplements</li>
            <li className="menu-item">Gear</li>
          </ul>
          <li>
            <Link to="/" onClick={menu}>
              <p className="menu-item">Panda Life</p>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={menu}>
              <p className="menu-item">Contact</p>
            </Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default withRouter(NavBar);
