import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import NavBarSub from "../NavBarSub/NavBarSub";
import NavBarDropDown from "../NavBarDropDown/NavBarDropDown";
import Pandamonium from "../../assets/img/pandamonium.svg";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    openMain: false,
    openSub: false,
    openSearch: false
  };
  toggleMenu = (val1, val2) =>
    this.setState(currentState => ({
      [val1]: !currentState[val1],
      [val2]: false
    }));
  render() {
    const { openMain, openSub, openSearch } = this.state;
    return (
      <Fragment>
        {/* Main Header */}
        <div id="main-header">
          <div className="logo-container">
            <Link to="/">
              <img src={Pandamonium} alt="Pandamonium" />
            </Link>
          </div>
          {/* Sub Header */}
          <NavBarSub
            openMain={openMain}
            openSearch={openSearch}
            toggleMenu={this.toggleMenu}
          />
        </div>
        {/* Dropdown Menu */}
        <NavBarDropDown
          openMain={openMain}
          openSub={openSub}
          toggleMenu={this.toggleMenu}
        />
      </Fragment>
    );
  }
}

export default withRouter(NavBar);
