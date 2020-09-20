export const modalReducer = (state = {}, action) => {
  const { type = "", payload = "" } = action;
  switch (type) {
    case "SHOW_MODAL":
      return {
        showOrHide: true,
        modalType: payload,
      };
    case "HIDE_MODAL":
      return {
        showOrHide: false,
        modalType: payload,
      };

    default:
      return {
        ...state
      };
  }
};
