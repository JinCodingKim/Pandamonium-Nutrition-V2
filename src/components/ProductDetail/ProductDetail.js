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
    console.log(this.props.product);
    const { product, isLoading } = this.props;
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
    } = product;
    let formattedHeader = header
      .split(" ")
      .map(
        (word, i, arr) =>
          arr.indexOf(word) === 0 ? <span key={i}>{word} </span> : word
      )
      .reduce((prev, curr) => [prev, " ", curr]);
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
        <button id="detail-cart-button">
          Add To Cart{" "}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z" />
          </svg>
        </button>
        <button id="detail-description-tab">
          Product Description{" "}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M18.7 8.3c-0.4-0.4-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z" />
          </svg>
        </button>
        <div className="detail-header-description">
          <h2>{formattedHeader}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state.shopReducer });
export default connect(
  mapStateToProps,
  { getProductDetail }
)(ProductDetail);
