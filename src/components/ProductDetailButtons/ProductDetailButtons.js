import React, { Component } from "react";
import ProductOptions from "../ProductOptions/ProductOptions";
import "./ProductDetailButtons.css";

class ProductDetailButtons extends Component {
  state = {
    buttonOn: false
  };
  toggleButton = () =>
    this.setState(currentState => ({ buttonOn: !currentState.buttonOn }));
  render() {
    const { buttonOn } = this.state;
    const {
      id,
      cartCheck,
      title,
      icon,
      variations,
      price,
      category,
      header,
      description
    } = this.props;
    const detailShift = buttonOn ? "on" : "off";
    let formattedHeader = header
      .split(": ")
      .map(
        (word, i, arr) =>
          arr.indexOf(word) === 0 ? (
            <span key={i}>
              {word} :<br />
            </span>
          ) : (
            word
          )
      )
      .reduce((prev, curr) => [prev, " ", curr]);
    return (
      <div className="detail-button">
        <button id={`${id}-${detailShift}`} onClick={this.toggleButton}>
          {title} {icon()}
        </button>
        {cartCheck ? (
          <ProductOptions
            cartShift={`detail-cart-${detailShift}`}
            variations={variations}
            price={price}
            category={category}
          />
        ) : (
          <div className={`header-description-${detailShift}`}>
            <h2>{formattedHeader}</h2>
            <p>{description}</p>
          </div>
        )}
      </div>
    );
  }
}
export default ProductDetailButtons;
