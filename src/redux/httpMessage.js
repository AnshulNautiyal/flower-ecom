const HTTP_ACTION = {
  message: "SET_HTTP_MESSAGE",
};
// action
export const httpMessageAction = (payload = "") => {
  return {
    type: HTTP_ACTION.message,
    payload,
  };
};
//  reducer
export const httpMessageReducer = (state = {}, action) => {
  const { type = "", payload = "" } = action;

  switch (type) {
    case HTTP_ACTION.message:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};
