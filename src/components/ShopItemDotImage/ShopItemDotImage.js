const ShopItemDotImage = ({ dot, displayImg, render }) => {
  let dotClass = displayImg === dot ? "on" : "off";
  return render(dotClass);
};
export default ShopItemDotImage;
