import React, { Component } from "react";
import ShopItemMedia from "../ShopItemMedia/ShopItemMedia";
import ShopItemText from "../ShopItemText/ShopItemText";
import ShopItemButtons from "../ShopItemButtons/ShopItemButtons";
import "./ShopItem.css";

class ShopItem extends Component {
  state = {
    openInfo: false
  };
  toggleInfo = () =>
    this.setState(currentState => ({
      openInfo: !currentState.openInfo
    }));
  render() {
    const { name, price, images, cartOn, handleModal } = this.props;
    const { openInfo } = this.state;
    let shift = openInfo ? "open" : "close";
    return (
      <section id="item-main">
        <ShopItemMedia img={images}>
          {({ displayImg, handleImg }) => (
            <div className={`item-img-${shift}`}>
              <div id="images-dots">
                {images.map((dot, i) => (
                  <div
                    key={i}
                    className={displayImg === dot ? "dot-on" : "dot-off"}
                    onClick={() => handleImg(dot)}
                  />
                ))}
              </div>
              {images.map((image, i) => (
                <img
                  key={i}
                  className={displayImg === image ? "img-on" : "img-off"}
                  src={image}
                  alt="Product"
                />
              ))}
            </div>
          )}
        </ShopItemMedia>
        <ShopItemText
          name={name}
          price={price}
          shift={shift}
          toggleInfo={this.toggleInfo}
        />
        <ShopItemButtons
          name={name}
          cartOn={cartOn}
          handleModal={handleModal}
        />
      </section>
    );
  }
}
export default ShopItem;
