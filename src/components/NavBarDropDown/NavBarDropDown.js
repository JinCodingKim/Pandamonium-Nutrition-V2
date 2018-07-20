import React from "react";
import { Link, withRouter } from "react-router-dom";
import Down from "../../assets/img/chevron-down.svg";
import "./NavBarDropDown.css";

const NavBarDropDown = ({ openMain, openSub, toggleMenu }) => {
  const newPage = () => toggleMenu("openMain", "openSub");
  let subShift = openSub ? "open" : "close";
  return (
    <ul id={openMain ? "open-main" : "close-main"}>
      <li>
        <Link to="/shop" onClick={newPage}>
          <p className="menu-item">Shop</p>
        </Link>
        <img
          onClick={() => toggleMenu("openSub")}
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
  );
};
export default withRouter(NavBarDropDown);
