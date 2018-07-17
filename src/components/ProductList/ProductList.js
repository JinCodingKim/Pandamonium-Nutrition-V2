import React, { Component } from "react";
import axios from "axios";
import "./ProductList.css";

class ProductList extends Component {
  componentDidMount() {}
  render() {
    console.log(this.props.match);
    return <div id="main-list">ProductList</div>;
  }
}
export default ProductList;
