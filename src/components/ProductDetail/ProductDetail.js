import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductDetail } from "../../ducks/shopReducer";
import ShopItemMedia from "../ShopItemMedia/ShopItemMedia";
import "./ProductDetail.css";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProductDetail(this.props.match.params.name);
  }
  render() {
    console.log(this.props.product);
    const { product } = this.props;
    // const imgExists = product && product.img_list;
    return (
      <div id="detail-main">
        <ShopItemMedia img={product.img_list}>
          {({ displayImg, handleImg }) => (
            <div className="detail-img">
              {console.log(displayImg)}
              {product.img_list.map((dot, i) => (
                <img
                  key={i}
                  // className={
                  //   displayImg === dot ? "detail-img-on" : "detail-img-off"
                  // }
                  src={dot}
                  alt="Product"
                />
              ))}
            </div>
          )}
        </ShopItemMedia>
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state.shopReducer });
export default connect(
  mapStateToProps,
  { getProductDetail }
)(ProductDetail);
