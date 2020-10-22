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

export const PdpLocalStateReducer = (state = {}, action) => {
  const { type = "", payload } = action;

  switch (type) {
    case PDP_ACTION.selectColor:
      return {
        ...state,
        colorSelected: payload,
      };
    case PDP_ACTION.colorNotSelected:
      const { showHide, message } = payload;
      return {
        ...state,
        showAlertInfo: {
          showHide,
          message,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
