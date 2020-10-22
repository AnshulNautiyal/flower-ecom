import React from "react";
import { baseUrl } from "../../../routes/Routes";

const redirectToCart = () => {
  console.log(11);
  window.location = baseUrl + "cart";
};
const PdpButtons = () => {
  return (
    <div className="pdpButton">
      <button onClick={redirectToCart}>
        <ion-icon name="cart-outline"></ion-icon> Go to Cart
      </button>
      <button>Add to Bag</button>
    </div>
  );
};
export default PdpButtons;
