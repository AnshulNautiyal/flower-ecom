export const showLoader = (payload) => ({
  type: "SHOW_LOADER",
  payload,
});

export const hideLoader = (payload) => ({
  type: "HIDE_LOADER",
  payload,
});
