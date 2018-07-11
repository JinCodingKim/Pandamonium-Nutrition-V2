import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/cart" component={Cart} />
    <Route path="/shop/:type" component={ProductDetail} />
    <Route path="/shop" component={ProductList} />
  </Switch>
);
