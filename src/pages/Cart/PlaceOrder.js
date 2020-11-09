import React from "react";
import { baseUrl } from "../../routes/Routes";

const redirectToCart = () => {
    window.location.href = baseUrl + "shipping";
};

export const PlaceOrder = (props) => {
  const { cartOrderDetails: { total_amount = "" } = {},refProps, scrollToOrderDetail } = props;
  return (
    <div className="placeOrder" ref={refProps}>
      <div className="cartFinalPrice">
        <div>&#x20B9; {total_amount ? total_amount : "0.00"}</div>
        <div onClick={scrollToOrderDetail}>view details</div>
      </div>
      <button className="placeOrderBtn" disabled={false} onClick={redirectToCart}>
        Place Order
      </button>
    </div>
  );
};
