export const hideToast = () => {
  return {
    type: "HIDE_TOAST",
  };
};

export const showToast = (payload) => {
  return {
    type: "SHOW_TOAST",
  };
};
