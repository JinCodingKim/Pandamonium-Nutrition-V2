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
    const { name, price, img } = this.props;
    const { openInfo } = this.state;
    let shift = openInfo ? "open" : "close";
    return (
      <section id="item-main">
        <ShopItemMedia img={img} shift={shift} />
        <ShopItemText
          name={name}
          price={price}
          shift={shift}
          toggleInfo={this.toggleInfo}
        />
        <ShopItemButtons name={name} />
      </section>
    );
  }
}
export default ShopItem;
