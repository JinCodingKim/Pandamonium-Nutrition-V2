import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./ShopItemButtons.css";

const ShopItemButtons = ({ name }) => (
  <div className="item-buttons">
    {/* maybe lead to a modal to selecte quantity and flavors first?? */}
    <Link to="/cart">
      <button>
        <svg
          id="item-cart"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z" />
          <path d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z" />
          <path d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z" />
        </svg>
        Add To Cart
      </button>
    </Link>
    <Link to={`/shop/product/${name}`}>
      <button>
        <svg
          id="item-stats"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path d="M0 26h32v4h-32zM4 18h4v6h-4zM10 10h4v14h-4zM16 16h4v8h-4zM22 4h4v20h-4z" />
        </svg>
        Details
      </button>
    </Link>
  </div>
);
export default withRouter(ShopItemButtons);
