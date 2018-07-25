import React from "react";
import { Link, withRouter } from "react-router-dom";
import { CartIcon, StatsIcon } from "../../assets/ChangeableSvg";
import "./ShopItemButtons.css";

const ShopItemButtons = ({ name }) => (
  <div className="item-buttons">
    {/* maybe lead to a modal to selecte quantity and flavors first?? */}
    <Link to="/cart">
      <button>
        {CartIcon()}
        Add To Cart
      </button>
    </Link>
    <Link to={`/shop/product/${name}`}>
      <button>
        {StatsIcon()}
        Details
      </button>
    </Link>
  </div>
);
export default withRouter(ShopItemButtons);
