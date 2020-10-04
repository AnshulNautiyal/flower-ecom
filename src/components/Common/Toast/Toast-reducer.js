export const toastReducer = (state = {}, action) => {
  const { type = "" } = action;
  switch (type) {
    case "SHOW_TOAST":
      return {
        toastShowOrHide: true,
      };
    case "HIDE_TOAST":
      return {
        toastShowOrHide: false,
      };

    default:
      return {
        ...state,
      };
  }
};
