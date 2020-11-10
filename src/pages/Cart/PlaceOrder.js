import React from "react";
import { baseUrl } from "../../routes/Routes";
import { readCookies } from "../../utils/readBrowserCookies";

const redirectToCart = () => {
  window.location.href = baseUrl + "shipping";
};

export const PlaceOrder = (props) => {
  const {
    cartOrderDetails: { total_amount = "" } = {},
    refProps,
    scrollToOrderDetail,
    isBagEmpty,
  } = props;
  const token = readCookies("A");
  const btnDisable = isBagEmpty || !token ? true : false;
  return (
    <div className="placeOrder" ref={refProps}>
      <div className="cartFinalPrice">
        <div>&#x20B9; {total_amount ? total_amount : "0.00"}</div>
        <div onClick={scrollToOrderDetail}>view details</div>
      </div>
      <button
        className="placeOrderBtn"
        disabled={btnDisable}
        onClick={redirectToCart}
      >
        Place Order
      </button>
    </div>
  );
};
