import React, { Component } from "react";
import ShopItemDotImage from "../ShopItemDotImage/ShopItemDotImage";
import "./ShopItemMedia.css";

class ShopItemMedia extends Component {
  static defaultProps = {
    img: []
  };
  state = {
    displayImg: this.props.img[0]
  };
  handleImg = displayImg => this.setState({ displayImg });
  render() {
    const { img, shift } = this.props;
    const { displayImg } = this.state;
    let dot = img.map((dot, i) => (
      <ShopItemDotImage
        key={i}
        dot={dot}
        displayImg={displayImg}
        render={dotClass => (
          <div
            className={`dot-${dotClass}`}
            onClick={() => this.handleImg(dot)}
          />
        )}
      />
    ));
    let chosenImg = img.map((dot, i) => (
      <ShopItemDotImage
        key={i}
        dot={dot}
        displayImg={displayImg}
        render={imgClass => (
          <img className={`img-${imgClass}`} src={displayImg} alt="Product" />
        )}
      />
    ));
    return (
      <div className={`item-img-${shift}`}>
        <div id="images-dots">{dot}</div>
        {chosenImg}
      </div>
    );
  }
}
export default ShopItemMedia;
