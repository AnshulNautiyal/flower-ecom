export const plp_action_type = {
  GET_PLP_PRODUCT: "GET_PLP_PRODUCT",
  PLP_SORT_BY: "PLP_SORT_BY",
  PLP_FILTER: "PLP_FILTER",
  PLP_DATA_FETCH_FAIL: "PLP_DATA_FETCH_FAIL",
};

export function getPlpProductAction(payload = {}) {
  return {
    type: plp_action_type.GET_PLP_PRODUCT,
    payload,
  };
}
export function plpFetchDataFail(payload = {}) {
  return {
    type: plp_action_type.PLP_DATA_FETCH_FAIL,
    payload,
  };
}

export function plpSortBy(payload = {}) {
  return {
    type: plp_action_type.PLP_SORT_BY,
    payload,
  };
}

export function plpFilterData(payload = {}) {
  return {
    type: plp_action_type.PLP_FILTER,
    payload,
  };
}
