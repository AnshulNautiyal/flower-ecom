import React, { useState,useEffect } from "react";

export const UpdateQuantity = (props) => {
  const {
    qty = "",
    colorCode = "",
    colorName = "",
    cartId = "",
    updateColorQuantity,
  } = props;
  const [quantity, setQuantity] = useState(qty);
  useEffect(() => {
    setQuantity(qty);
  }, [qty])

  const updateQty = (type) => () => {
    if (quantity > 1 && type === "REMOVE") {
      setQuantity((qty) => --qty); // decrease color quantity
    } else if (type === "ADD") {
      setQuantity((qty) => ++qty); // increase color quantity
    }
  };

  return (
    <div className="updateQuantity">
      <div className="colorDetails">
        <div style={{ backgroundColor: `${colorCode}` }}></div>
        <div>{colorName}</div>
      </div>
      <div className="changeQuantity">
        <ion-icon
          name="remove-outline"
          onClick={updateQty("REMOVE")}
        ></ion-icon>
        <div>{quantity}</div>
        <ion-icon name="add-outline" onClick={updateQty("ADD")}></ion-icon>
      </div>
      <button type="button" onClick={updateColorQuantity(cartId, quantity)}>
        Update
      </button>
    </div>
  );
};
