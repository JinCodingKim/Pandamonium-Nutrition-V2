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
    const { product, isLoading } = this.props;
    const images = product.img_list;
    if (isLoading || !Object.keys(product).length) return <div>Loading...</div>;
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
                  <div
                    key={i}
                    className={
                      displayImg === dot ? "detail-dot-on" : "detail-dot-off"
                    }
                    onClick={() => handleImg(dot)}
                  />
                ))}
              </div>
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
