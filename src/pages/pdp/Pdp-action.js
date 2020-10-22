export const PDP_ACTION = {
  pdpDataFetch: "GET_PDP_DATA",
};
export const getPdpDataAction = (payload = {}) => {
  return {
    type: PDP_ACTION.pdpDataFetch,
    payload,
  };
};
