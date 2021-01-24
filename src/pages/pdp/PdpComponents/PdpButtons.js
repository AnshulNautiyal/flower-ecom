import React from "react";
import { baseUrl } from "../../../routes/Routes";

const redirectToCart = () => {
  console.log(121212)
  window.location = "/cart";
};
const PdpButtons = (props) => {
  const { handleAddToBag } = props;
  return (
    <div className="pdpButton">
      <button onClick={redirectToCart}>
        <ion-icon name="cart-outline"></ion-icon> Go to Bag
      </button>
      <button onClick={handleAddToBag}>Add to Bag</button>
    </div>
  );
};
export default PdpButtons;
