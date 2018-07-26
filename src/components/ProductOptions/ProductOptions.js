import React, { Component } from "react";
import "./ProductOptions.css";

class ProductOptions extends Component {
  static defaultProps = {
    variations: []
  };
  state = {
    quantity: 1,
    variationVal: this.props.variations[0]
  };
  handleSubmit = () => {};
  handleVariation = event =>
    this.setState({ variationVal: event.target.value });
  handleQuantity = event =>
    event.target.value === "-"
      ? this.setState(currentState => ({ quantity: --currentState.quantity }))
      : this.setState(currentState => ({ quantity: ++currentState.quantity }));
  render() {
    const { quantity, variationVal } = this.state;
    const { cartShift, variations, price, category, handleModal } = this.props;
    return (
      <form id={cartShift} onSubmit={this.handleSubmit}>
        <label>
          Price:
          <p>$ {price}</p>
        </label>
        <label>
          {category === "supplement" ? "Flavor:" : "Size:"}
          <div className="options-variations">
            {variations.map((variation, i) => (
              <input
                className={
                  variationVal === variation ? `variation-on` : `variation-off`
                }
                key={i}
                type="button"
                value={variation}
                onClick={this.handleVariation}
              />
            ))}
          </div>
        </label>
        <label>
          Quantity:
          <div className="options-quantity">
            <input
              type="button"
              disabled={quantity === 1}
              value="-"
              onClick={this.handleQuantity}
            />
            <p>{quantity}</p>
            <input type="button" value="+" onClick={this.handleQuantity} />
          </div>
        </label>
        <div className="options-buttons">
          {cartShift === "shop-cart" && (
            <input
              className="options-cancel"
              type="button"
              value="Cancel"
              onClick={() => handleModal("")}
            />
          )}
          <input className="options-submit" type="submit" value="Confirm" />
        </div>
      </form>
    );
  }
}
export default ProductOptions;
