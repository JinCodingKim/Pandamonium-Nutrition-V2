import React, { Component } from "react";
import ShopItem from "../ShopItem/ShopItem";
import { connect } from "react-redux";
import { getProducts } from "../../ducks/shopReducer";
import "./Shop.css";

class Shop extends Component {
  componentDidMount() {
    this.props.getProducts(this.props.match.params.type);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.type !== this.props.match.params.type)
      this.props.getProducts(this.props.match.params.type);
  }
  render() {
    console.log(this.props.products);
    let productsList = this.props.products
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
const mapStateToProps = state => ({ ...state.shopReducer });
export default connect(
  mapStateToProps,
  { getProducts }
)(Shop);
