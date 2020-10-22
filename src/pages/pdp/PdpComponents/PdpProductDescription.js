import React from "react";

const PdpProductDescription = (props) => {
  const {
    productDetail: {
      name = "",
      short_description = "",
      price = "",
      wasPrice = "",
      discount = "",
    } = {},
  } = props;
  return (
    <div className="pdpDesc">
      <div className="brand">{name}</div>
      <div className="description">{short_description}</div>
      <div className="priceSection">
        {price && <div className="price">&#x20B9;{price}</div>}
        {wasPrice && <div className="wasPrice">&#x20B9;{wasPrice}</div>}
        {discount && <div className="discount">{discount}% OFF</div>}
      </div>
    </div>
  );
};
export default PdpProductDescription;
