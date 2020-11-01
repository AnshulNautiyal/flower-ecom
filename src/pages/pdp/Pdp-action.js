export const PDP_ACTION = {
  pdpDataFetch: "GET_PDP_DATA",
  selectColor: "SELECT_COLOR",
  colorNotSelected: "COLOR_NOT_SELECT",
  cartTotalCount: "CART_ITEM_COUNT",
};
export const getPdpDataAction = (payload = {}) => {
  return {
    type: PDP_ACTION.pdpDataFetch,
    payload,
  };
};
export const selectColorAction = (payload = {}) => {
  return {
    type: PDP_ACTION.selectColor,
    payload,
  };
};
export const colorNotSelected = (payload = {}) => {
  return {
    type: PDP_ACTION.colorNotSelected,
    payload,
  };
};
export const cartTotalItem  = (payload = {}) => {
  return {
    type: PDP_ACTION.cartTotalCount,
    payload,
  };
};