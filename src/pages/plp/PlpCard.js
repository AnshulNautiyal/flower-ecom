import React from "react";
import 'lazysizes';
const hostName = window.location.origin;

const getColoVariant = (colorVariant = []) => {
  return colorVariant.map((item, index) => (
    <div
      key={item.color_id}
      className="color"
      style={{
        backgroundColor: `${item.hex_code}`,
        zIndex: colorVariant.length - index,
      }}
    />
  ));
};
const PlpCard = ({
  price = "",
  wasPrice = "",
  imageUrl = "",
  redirect = "",
  varient = [],
  discount = "",
  flower_id = "",
  name = "",
}) => {
  const completePath = hostName;
  return (
  <div className="plpCardContainer" key={flower_id}>
    <a href={`${completePath}/${redirect}`}>
      <div className="image">
        <img data-src={imageUrl} alt={name} className="lazyload" />
      </div>
      <div className="productDetail">
        <p className="description">{name}</p>
        <p className="price-tag">
          {parseInt(price) < parseInt(wasPrice) && <span>Rs. {wasPrice}</span>}
          Rs. {price}
          {parseInt(price) < parseInt(wasPrice) && (
            <span className="discount">{discount}% off</span>
          )}
        </p>

        <div className="colorVariant">{getColoVariant(varient)}</div>
      </div>
    </a>
  </div>
)};

export default PlpCard;
