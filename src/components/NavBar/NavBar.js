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
    openSub: false,
    openSearch: false,
    searchVal: ""
  };
  toggleMenu = (val1, val2) =>
    this.setState(currentState => ({
      [val1]: !currentState[val1],
      [val2]: false
    }));
  handleSearch = event => this.setState({ searchVal: event.target.value });
  render() {
    const { openMain, openSub, openSearch, searchVal } = this.state;
    const newPage = () => this.toggleMenu("openMain", "openSub");
    let subShift = openSub ? "open" : "close";
    return (
      <Fragment>
        {/* Main Header */}
        <div id="main-header">
          <div className="logo-container">
            <Link to="/">
              <img src={Pandamonium} alt="Pandamonium" />
            </Link>
          </div>
          <div className="sub-nav-container">
            {/* Search Bar */}
            <div className="search">
              <img
                src={Search}
                alt="Search"
                onClick={() => this.toggleMenu("openSearch")}
              />
              <input
                id={openSearch ? "open-search" : "close-search"}
                type="text"
                value={searchVal}
                onChange={this.handleSearch}
              />
            </div>
            <div className="cart">
              <img src={Cart} alt="Cart" />
            </div>

            {/* Hamburger */}
            <div id="burger-toggle">
              <input
                type="checkbox"
                checked={openMain}
                onClick={() => this.toggleMenu("openMain")}
              />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <ul id={openMain ? "open-main" : "close-main"}>
          <li>
            <Link to="/shop" onClick={newPage}>
              <p className="menu-item">Shop</p>
            </Link>
            <img
              onClick={() => this.toggleMenu("openSub")}
              className={`icon-${subShift}`}
              src={Down}
              alt="Down"
            />
          </li>
          <ul id={`${subShift}-sub`} onClick={newPage}>
            <li>
              <Link to="/shop/supplement">
                <p className="menu-item">Supplements</p>
              </Link>
            </li>
            <li>
              <Link to="/shop/gear">
                <p className="menu-item">Gear</p>
              </Link>
            </li>
          </ul>
          <li>
            <Link to="/" onClick={newPage}>
              <p className="menu-item">Panda Life</p>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={newPage}>
              <p className="menu-item">Contact</p>
            </Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default withRouter(NavBar);
