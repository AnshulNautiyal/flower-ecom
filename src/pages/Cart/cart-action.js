export const CART_ACTION = {
  cartItems: "SET_CART_ITEM",
  cartOrderDetails: "CART_ORDER_DETAILS",
  cartItemCount: "CART_ITEMS_COUNT",
  cartShimmerToggle: "CART_SHIMMER",
  isBagEmpty: "BAG_EMPTY",
};

export const setCartItem = (payload) => ({
  type: CART_ACTION.cartItems,
  payload,
});

export const setCartOrderDetails = (payload) => ({
  type: CART_ACTION.cartOrderDetails,
  payload,
});

export const setCartItemCount = (payload) => ({
  type: CART_ACTION.cartItemCount,
  payload,
});

export const setCartShimmer = (payload) => ({
  type: CART_ACTION.cartShimmerToggle,
  payload,
});
export const setBagEmpty = (payload) => ({
  type: CART_ACTION.isBagEmpty,
  payload,
});