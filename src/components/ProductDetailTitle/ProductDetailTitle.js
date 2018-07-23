import React, { Component } from "react";
import Pandamonium from "../../assets/img/pandamonium.svg";
import "./ProductDetailTitle.css";

class ProductDetailTitle extends Component {
  state = {
    icon0: false,
    icon1: false,
    icon2: false
  };
  toggleIcon = prop =>
    this.setState(currentState => ({ [prop]: !currentState[prop] }));
  render() {
    const { name, itemtype, icons } = this.props;
    let formattedName = name.split(" ").map(
      (word, i, arr) =>
        arr.indexOf(word) === arr.length - 2 ? (
          <span key={i}>
            {word}
            <br />
          </span>
        ) : (
          <span key={i}>{word}</span>
        )
    );
    let formattedIcons = icons.map(
      (icon, i) =>
        icon[0] ? (
          <div className="icon-tag" key={i}>
            <img
              src={icon[0]}
              alt="icon"
              onMouseEnter={() => this.toggleIcon(`icon${i}`)}
              onMouseLeave={() => this.toggleIcon(`icon${i}`)}
            />
            <p className={this.state[`icon${i}`] ? "tag-on" : "tag-off"}>
              {icon[1]}
            </p>
          </div>
        ) : (
          <div className="no-icon" />
        )
    );
    return (
      <div id="detail-title">
        <img src={Pandamonium} alt="Pandamonium" />
        <h1>{formattedName}</h1>
        <p>{itemtype}</p>
        <div className="detail-icons">{formattedIcons}</div>
      </div>
    );
  }
}
export default ProductDetailTitle;
