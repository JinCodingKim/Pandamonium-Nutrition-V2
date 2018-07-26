import React from "react";
import { Link, withRouter } from "react-router-dom";
import { CartIcon, StatsIcon } from "../../assets/ChangeableSvg";
import "./ShopItemButtons.css";

const ShopItemButtons = ({ name, cartOn, handleModal }) => (
  <div className="item-buttons">
    <button onClick={() => handleModal(name)}>
      {CartIcon()}
      Add To Cart
    </button>
    <Link to={`/shop/product/${name}`}>
      <button>
        {StatsIcon()}
        Details
      </button>
    </Link>
  </div>
);

export default withRouter(ShopItemButtons);
