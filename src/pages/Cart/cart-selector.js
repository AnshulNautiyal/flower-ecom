export const getCartItemSelectors = (state) => {
  const { cart: { cartItems = [] } = {} } = state;
  return cartItems;
};

export const getCartOrderDetailsSelector = (state) => {
  const { cart: { cartOrderDetails = {} } = {} } = state;
  return cartOrderDetails;
};

export const getCartItemCountSelectors = (state) => {
  const { cart: { cartItemCount = 0 } = {} } = state;
  return cartItemCount;
};
export const cartShimmer = (state) => {
    const { cart: { toggleShimmer = true } = {} } = state;
    return toggleShimmer;
  };
export const getBagEmpty = (state) => {
    const { cart: { isBagEmpty = false } = {} } = state;
    return isBagEmpty;
  };
  export const getModalState = (state) => {
    const { modalState = {} } = state;
    return modalState;
  };
