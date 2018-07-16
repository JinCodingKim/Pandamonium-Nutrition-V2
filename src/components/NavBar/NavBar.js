import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Pandamonium from "../../assets/img/pandamonium.svg";
import Search from "../../assets/img/search.svg";
import Cart from "../../assets/img/cart.svg";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    open: false
  };
  toggleMenu = () => {
    console.log("OPEN");
    this.setState(currentState => {
      return { open: !currentState.open };
    });
  };
  render() {
    const { open } = this.state;
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
              <input type="checkbox" checked={open} onClick={this.toggleMenu} />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <ul id={open ? "open" : "close"}>
          <li>
            <Link to="/shop" onClick={this.toggleMenu}>
              <p className="menu-item">Shop</p>
            </Link>
            <svg
              className="menu-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
            >
              <path d="M26.297 12.625l-11.594 11.578c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.578c-0.391-0.391-0.391-1.031 0-1.422l2.594-2.578c0.391-0.391 1.016-0.391 1.406 0l8.297 8.297 8.297-8.297c0.391-0.391 1.016-0.391 1.406 0l2.594 2.578c0.391 0.391 0.391 1.031 0 1.422z" />
            </svg>
          </li>
          <li>
            <Link to="/" onClick={this.toggleMenu}>
              <p className="menu-item">Panda Life</p>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={this.toggleMenu}>
              <p className="menu-item">Contact</p>
            </Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default withRouter(NavBar);
