import { PDP_ACTION } from "./Pdp-action";

export const PdpReducer = (state = {}, action) => {
  const { type = "", payload } = action;

  switch (type) {
    case PDP_ACTION.pdpDataFetch:
      return payload;

    default:
      return {
        ...state,
      };
  }
};
