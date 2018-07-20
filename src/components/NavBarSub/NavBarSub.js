import React, { Component } from "react";
import Search from "../../assets/img/search.svg";
import Cart from "../../assets/img/cart.svg";
import "./NavBarSub.css";

class NavBarSub extends Component {
  state = {
    searchVal: ""
  };
  handleSearch = event => this.setState({ searchVal: event.target.value });
  render() {
    const { openMain, openSearch, toggleMenu } = this.props;
    const { searchVal } = this.state;
    return (
      <div className="sub-nav-container">
        {/* Search Bar */}
        <div className="search">
          <img
            src={Search}
            alt="Search"
            onClick={() => toggleMenu("openSearch")}
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
            onClick={() => toggleMenu("openMain")}
          />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}
export default NavBarSub;
