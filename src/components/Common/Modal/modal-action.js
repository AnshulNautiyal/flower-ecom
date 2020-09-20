export const hideModal = () => {
  return {
    type: "HIDE_MODAL",
  };
};

export const showModal = (payload) => {
  return {
    type: "SHOW_MODAL",
    payload
  };
};
