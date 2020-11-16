import React, { useState } from "react";

export const OutOfStock = (props) => {
  const { cartItem = [], handelRemoveCart } = props;

  const getOutOfStockItem = () =>
    cartItem.map((item) => {
      if (!item.in_stock) {
        return (
          <div className="cartCard">
            <div className="disableOverLay"></div>
            <div className="cardDetails">
              <div className="cardImage animate">
                <a href={item.redirect}>
                  <img src={item.imagePath} alt="Cart Items" />
                </a>
              </div>
              <div className="cardInfo">
                <div className="itemName">{item.name}</div>
                <div className="itemDescription">{item.short_description}</div>
                <div className="itemColorQty">
                  <div
                    className="cartColor"
                    style={{ backgroundColor: `${item.color_code}` }}
                  ></div>
                  ({item.color_name})
                  <div className="colorQty">
                    <span>Qty</span> {item.quantity_in_cart}
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </div>
                </div>
                <div className="priceSection">
                  <span>&#x20B9;{item.price}</span>
                  <span>&#x20B9;{item.wasPrice}</span>
                  <span>({item.discount}%)</span>
                </div>
                <div className="saving">
                  You save{" "}
                  <span>
                    &#x20B9;{parseInt(item.wasPrice) - parseInt(item.price)}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="removeOssBtn"
              onClick={handelRemoveCart(item.cart_item_id)}
            >
              Remove
            </div>
          </div>
        );
      }
    });

  return (
    <div className="cartOos">
      <div className="oosMessage">
        <ion-icon name="alert-circle"></ion-icon>
        <div className="message">
          <h2>Out of Stock</h2>
          <p>Please remove item from bag to proceed.</p>
        </div>
      </div>
      <div className="oosItemList">{getOutOfStockItem()}</div>
    </div>
  );
};
