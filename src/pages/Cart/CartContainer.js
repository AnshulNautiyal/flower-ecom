import React from "react";

export const CartContainer = (props) => {
  const {
    cartItem = [],
    openRemoveCartModal,
    openUpdateQuantityModal,
    anyOneItemOutOfStock,
  } = props;
  const getCartItemCard = (cartItem = []) => {
    return cartItem.map((item, index) => {
      if (!item.in_stock) {
        return null;
      }
      return (
        <div className="cartCard">
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
                <div
                  className="colorQty"
                  onClick={openUpdateQuantityModal(
                    item.quantity_in_cart,
                    item.color_code,
                    item.color_name,
                    item.cart_item_id
                  )}
                >
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
          <div className="cardRemove">
            <div>Not returnable</div>
            <div
              onClick={openRemoveCartModal(item.cart_item_id, item.imagePath)}
            >
              Remove
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={`cartProductCardSection ${ anyOneItemOutOfStock ? "" : "addPadding" }`}>
      <div className="cartItemContainer">{getCartItemCard(cartItem)}</div>
    </div>
  );
};
