import { CART_ACTION } from "./cart-action";

export const cartReducer = (state = {}, action = {}) => {
  const { type = "", payload = "" } = action;

  switch (type) {
    case CART_ACTION.cartItems:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION.cartOrderDetails:
      return {
        ...state,
        cartOrderDetails: payload,
      };
    case CART_ACTION.cartItemCount:
      return {
        ...state,
        cartItemCount: payload,
      };
    case CART_ACTION.cartShimmerToggle:
      return {
        ...state,
        toggleShimmer: payload,
      };
    case CART_ACTION.isBagEmpty:
      return {
        ...state,
        isBagEmpty: payload,
      };
    default:
      return {
        ...state
      }
  }
};
