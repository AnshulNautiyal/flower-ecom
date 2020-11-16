import React from "react";
import { readCookies } from "../../utils/readBrowserCookies";

export const PlaceOrder = (props) => {
  const {
    cartOrderDetails: { total_amount = "" } = {},
    refProps,
    scrollToOrderDetail,
    isBagEmpty,
    redirectToCart,
    cartItemCount,
    anyOneItemOutOfStock,
  } = props;
  const token = readCookies("A");
  const btnDisable =
    isBagEmpty || !token || cartItemCount === 0 || anyOneItemOutOfStock
      ? true
      : false;
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
