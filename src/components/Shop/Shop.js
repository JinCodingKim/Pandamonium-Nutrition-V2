import React, { Component } from "react";
import axios from "axios";
import ShopItem from "../ShopItem/ShopItem";
import "./Shop.css";

class Shop extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    axios
      .get(`/api/products?type=${this.props.match.params.type}`)
      .then(({ data }) => this.setState({ products: data }));
  }
  render() {
    console.log(this.state);
    let productsList = this.state.products
      .sort((a, b) => b.product_category.localeCompare(a.product_category))
      .map(({ product_id, product_name, product_price, img_list }) => (
        <ShopItem
          key={product_id}
          name={product_name}
          price={product_price}
          img={img_list}
        />
      ));
    return <div id="shop-main">{productsList}</div>;
  }
}
export default Shop;
