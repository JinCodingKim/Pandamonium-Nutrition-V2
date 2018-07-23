import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductDetail } from "../../ducks/shopReducer";
import ShopItemMedia from "../ShopItemMedia/ShopItemMedia";
import ProductDetailTitle from "../ProductDetailTitle/ProductDetailTitle";
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
      images,
      description,
      header,
      name,
      price,
      variations,
      itemtype
    } = this.props.product;
    return (
      <div id="detail-main">
        <ShopItemMedia img={images}>
          {({ displayImg, handleImg }) => (
            <div className="detail-img">
              {images.map((image, i) => (
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
                {images.map((dot, i) => (
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
        <ProductDetailTitle name={name} itemtype={itemtype} icons={icons} />
        <button id="detail-cart-button">Add To Cart</button>
        <div className="detail-header-description" />
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state.shopReducer });
export default connect(
  mapStateToProps,
  { getProductDetail }
)(ProductDetail);
