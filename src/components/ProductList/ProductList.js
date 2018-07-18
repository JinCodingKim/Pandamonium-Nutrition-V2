import React, { Component } from "react";
import axios from "axios";
import "./ProductList.css";

class ProductList extends Component {
  componentDidMount() {
    axios
      .get(`/api/products?type=${this.props.match.params.type}`)
      .then(res => console.log(res));
  }
  render() {
    console.log(this.props.match);
    return <div id="main-list">ProductList</div>;
  }
}
export default ProductList;
