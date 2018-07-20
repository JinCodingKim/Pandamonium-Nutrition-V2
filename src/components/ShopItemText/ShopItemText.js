import React, { Fragment } from "react";
import Down from "../../assets/img/chevron-down.svg";
import "./ShopItemText.css";

const ShopItemText = ({ name, price, shift, toggleInfo }) => (
  <Fragment>
    <div className={`item-title-price-${shift}`}>
      <h5>{name}</h5>
      <h6>$ {price}</h6>
    </div>
    <div className={`item-icon-${shift}`}>
      <img
        onClick={toggleInfo}
        className={`item-${shift}`}
        src={Down}
        alt="Down"
      />
    </div>
    <div id={`${shift}-info`}>
      <p>
        bla bla bla bla bla bla bla bla bla this is where short description will
        go bla bla bla bla
      </p>
    </div>
  </Fragment>
);
export default ShopItemText;
