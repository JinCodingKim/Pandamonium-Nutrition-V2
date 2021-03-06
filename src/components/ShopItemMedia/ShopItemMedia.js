import { Component } from "react";
import "./ShopItemMedia.css";

class ShopItemMedia extends Component {
  static defaultProps = {
    img: []
  };
  state = {
    displayImg: this.props.img[0]
  };
  handleImg = displayImg => this.setState({ displayImg });
  getStateAndHelpers = () => ({
    displayImg: this.state.displayImg,
    handleImg: this.handleImg
  });
  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}
export default ShopItemMedia;
