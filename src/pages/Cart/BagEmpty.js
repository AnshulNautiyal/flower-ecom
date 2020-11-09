import React from "react";
import bagImage from "../../static/images/bag.svg";
import { readCookies } from "../../utils/readBrowserCookies";

export const BagEmpty = () => {
  const token = readCookies("A");
  return (
    <div className="bagEmpty">
      <div className="bagEmpty__message">
        <div className="bagEmptyImage">
          <img src={bagImage} />
        </div>
        <h2>Your bag is empty</h2>
        {!token ? (
          <p>Sign in to link products to your account.</p>
        ) : (
          <p>Please add products in your bag for checkout.</p>
        )}
      </div>
      <div className="bagEmpty__button">
        <button>Continue Shopping</button>
        {!token ? <button>Login/ Join</button> : null}
      </div>
    </div>
  );
};
