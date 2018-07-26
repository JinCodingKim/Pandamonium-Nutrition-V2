import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductDetail } from "../../ducks/shopReducer";
import ProductOptions from "../ProductOptions/ProductOptions";
import "./ShopModal.css";

class ShopModal extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.cartOn !== this.props.cartOn)
      this.props.getProductDetail(this.props.name);
  }
  render() {
    const { product, isLoading, cartOn, handleModal } = this.props;
    if (!cartOn) {
      return null;
    } else if (isLoading || !Object.keys(product).length) {
      return <div>Loading...</div>;
    }
    const { price, variations, category } = product;
    return (
      <div className="backdrop">
        <ProductOptions
          cartShift={"shop-cart"}
          variations={variations}
          price={price}
          category={category}
          handleModal={handleModal}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state.shopReducer });
export default connect(
  mapStateToProps,
  { getProductDetail }
)(ShopModal);
