import React from "react";

const hostName = window.location.host;

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
}) => (
  <div className="plpCardContainer" key={flower_id}>
    <a href={`${hostName}/${redirect}`}>
      <div className="image">
        <img src={imageUrl} alt={name} />
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
);

export default PlpCard;
