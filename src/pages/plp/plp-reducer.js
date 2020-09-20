import { plp_action_type } from "./plp-action";

function plpReducer(state = {}, action) {
  const { type = "", payload } = action;
  switch (type) {
    case plp_action_type.GET_PLP_PRODUCT:
      return {
        ...state,
        ...payload,
      };

      case plp_action_type.PLP_SORT_BY:
      return {
        ...state,
        plpSortedData: ['asdsa'],
        plpSortByType : payload
      };

    default:
      return {
        ...state
      }
  }
}

export {
    plpReducer
}
