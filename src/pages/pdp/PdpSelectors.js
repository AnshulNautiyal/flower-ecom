export const getPdpImages = (state) => {
  const { pdpData: { varient = [] } = {} } = state;

  return varient;
};

export const getProductDescription = (state) => {
  const {
    pdpData: {
      name = "",
      short_description = "",
      price = "",
      wasPrice = "",
      discount = "",
      details = "",
    } = {},
  } = state;

  return {
    name,
    short_description,
    price,
    wasPrice,
    discount,
    details,
  };
};

export const getSelectedSize = (state) => {
  const { pdpLocalState: { colorSelected = {} } = {} } = state;
  return colorSelected;
};

export const colorNotSelectedInfo = (state) => {
  const { pdpLocalState: { showAlertInfo = {} } = {} } = state;
  return showAlertInfo;
};

export const getHttpMessage = (state) => {
  const { httpMessage: { message = "" } = {} } = state;
  return message;
};

export const getPdpCartItemsCount = state => {
  const {
    pdpData: {
      pdpCartItemTotal = 0
    } = {},
  } = state;
  return pdpCartItemTotal;
}