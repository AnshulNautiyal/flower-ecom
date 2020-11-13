import React from "react";

const ProductDetails = (props) => {
  const {
    productDetail: { details = "" } = {},
    images: { imagePath = "" } = {},
  } = props;

  return (
    <div className="productDetail">
      <h2>Product Details</h2>
      <p>{details}</p>
      <div>
       {imagePath && <img src={imagePath} alt="Product  Details"/> }
      </div>
    </div>
  );
};

export default ProductDetails;
