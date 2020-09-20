export const getPlpData = (state) => {
  const { plpData = {} } = state;
  const { flowerData = [], numberOfItem = "", plpheader = "" } = plpData;
  const productCard = flowerData.map((item) => {
    const {
      price = "",
      wasPrice = "",
      imageUrl = "",
      redirect = "",
      varient = [],
      discount = "",
      flower_id = "",
      name = "",
    } = item;
    return {
      price,
      wasPrice,
      imageUrl,
      redirect,
      varient,
      discount,
      flower_id,
      name,
    };
  });
  return {
    productCard,
    numberOfItem,
    plpHeader: plpheader,
  };
};

export const getModalState = (state) => {
  const { modalState = {} } = state;
  return modalState;
};
