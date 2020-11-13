import React from "react";
import bagImage from "../../static/images/bag.svg";
import { readCookies } from "../../utils/readBrowserCookies";

export const BagEmpty = () => {
  const token = readCookies("A");
  const userType = readCookies("user_type") || "";
  return (
    <div className="bagEmpty">
      <div className="bagEmpty__message">
        <div className="bagEmptyImage">
          <img src={bagImage} alt="Bag is Empty"/>
        </div>
        <h2>Your bag is empty</h2>
        {token ? (
          userType !== "L" ? (
            <p>Sign in to link products to your account.</p>
          ) : (
            <p>Please add products in your bag for checkout.</p>
          )
        ) : (
          <p>Sign in to link products to your account.</p>
        )}
      </div>
      <div className="bagEmpty__button">
        <button onClick={() => (window.location = "/")}>Continue Shopping</button>
        {token ? (
          userType !== "L" ? (
            <a href="/signin?referrer=/cart">Login/ Join</a>
          ) : null
        ) : <a href="/signin?referrer=/cart">Login/ Join</a>}
      </div>
    </div>
  );
};
