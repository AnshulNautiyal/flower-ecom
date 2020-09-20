export const plp_action_type = {
  GET_PLP_PRODUCT: "GET_PLP_PRODUCT",
  PLP_SORT_BY: "PLP_SORT_BY"
};

export function getPlpProductAction(payload = {}) {
  return {
    type: plp_action_type.GET_PLP_PRODUCT,
    payload,
  };
}

export function plpSortBy(payload = {}) {
  return {
    type: plp_action_type.PLP_SORT_BY,
    payload,
  };
}
