import React, { Component } from "react";
import "./ProductList.css";

class ProductList extends Component {
  render() {
    console.log(this.props.match);
    return <div id="main-list">ProductList</div>;
  }
}
export default ProductList;
