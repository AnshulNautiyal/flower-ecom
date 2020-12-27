import React from "react";

export const OrderDetails = (data) => {
  const {
    orderDetails: {
      cart_total = "",
      delivery_charges = "",
      savings = "",
      total_amount = "",
    } = {},
  } = data;

  const getBubble = (count = 10) => {
    const arr = [];
    for (let index = 0; index < 16; index++) {
      arr.push(<div></div>);
    }
    return arr;
  };

  return (
    <div className="orderDetails">
      <div className="cartBubble">{getBubble()}</div>
      <div className="price-calc">
        <div className="price bagTotal">
          <div>Bag total</div>
          <div>&#x20B9; {cart_total}</div>
        </div>
        <div className="price saving">
          <div>Savings</div>
          <div>-&#x20B9; {savings}</div>
        </div>
        <div className="price delivery">
          <div>Delivery</div>
          <div>&#x20B9; {delivery_charges}</div>
        </div>
        <div className="price totalAmount">
          <div>Total Amount</div>
          <div>&#x20B9; {total_amount}</div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
