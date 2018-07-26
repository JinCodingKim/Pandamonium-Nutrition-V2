import React, { Component } from "react";
import ShopItem from "../ShopItem/ShopItem";
import { connect } from "react-redux";
import { getProducts } from "../../ducks/shopReducer";
import ShopModal from "../ShopModal/ShopModal";
import "./Shop.css";

class Shop extends Component {
  state = {
    cartOn: false,
    name: ""
  };
  componentDidMount() {
    this.props.getProducts(this.props.match.params.type);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.type !== this.props.match.params.type)
      this.props.getProducts(this.props.match.params.type);
  }
  handleModal = name =>
    this.setState(currentState => ({
      cartOn: !currentState.cartOn,
      name
    }));
  render() {
    console.log(this.props.products, this.props.product);
    let productsList = this.props.products
      .sort((a, b) => b.category.localeCompare(a.category))
      .map(({ id, name, price, images }) => (
        <ShopItem
          key={id}
          name={name}
          price={price}
          images={images}
          cartOn={this.state.cartOn}
          handleModal={this.handleModal}
        />
      ));
    return (
      <div id="shop-main">
        <ShopModal
          name={this.state.name}
          cartOn={this.state.cartOn}
          handleModal={this.handleModal}
        />
        {productsList}
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state.shopReducer });
export default connect(
  mapStateToProps,
  { getProducts }
)(Shop);
