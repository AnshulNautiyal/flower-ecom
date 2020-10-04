export function LoaderReducer(state, action) {
  const { type = "", payload = false } = action;
  switch (type) {
    case "SHOW_LOADER":
      return {
        ...state,
        showOrHideLoader: payload,
      };
    case "HIDE_LOADER":
      return {
        ...state,
        showOrHideLoader: payload,
      };
    default:
      return {
        showOrHideLoader: false,
      };
  }
}
