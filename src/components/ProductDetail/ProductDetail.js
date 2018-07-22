import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductDetail } from "../../ducks/shopReducer";
import ShopItemMedia from "../ShopItemMedia/ShopItemMedia";
// import ProductDetailTitle from '../ProductDetailTitle/ProductDetailTitle';
import Pandamonium from "../../assets/img/pandamonium.svg";
import "./ProductDetail.css";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProductDetail(this.props.match.params.name);
  }
  render() {
    const { product, isLoading } = this.props;
    console.log(product);
    if (isLoading || !Object.keys(product).length) return <div>Loading...</div>;
    const {
      icons,
      img_list,
      product_description,
      product_header,
      product_name,
      product_price,
      product_variation
    } = this.props.product;
    return (
      <div id="detail-main">
        <ShopItemMedia img={img_list}>
          {({ displayImg, handleImg }) => (
            <div className="detail-img">
              {img_list.map((image, i) => (
                <img
                  key={i}
                  className={
                    displayImg === image ? "detail-img-on" : "detail-img-off"
                  }
                  src={image}
                  alt="Product"
                />
              ))}
              <div id="detail-images-dots">
                {img_list.map((dot, i) => (
                  <img
                    key={i}
                    className={
                      displayImg === dot ? "detail-dot-on" : "detail-dot-off"
                    }
                    onClick={() => handleImg(dot)}
                    src={dot}
                    alt="Product"
                  />
                ))}
              </div>
            </div>
          )}
        </ShopItemMedia>
        <div id="detail-title">
          <img src={Pandamonium} alt="Pandamonium" />
          <h1>{product_name}</h1>
        </div>
        {/* <ProductDetailTitle /> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state.shopReducer });
export default connect(
  mapStateToProps,
  { getProductDetail }
)(ProductDetail);
