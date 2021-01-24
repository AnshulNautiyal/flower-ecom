import axios from "axios";
import orderApi from "../../api/orderConfirmation-api";
import { readCookies } from "../../utils/readBrowserCookies";

export const getOrderDetails = (order_id, callBack) => {
  return async (dispatch) => {
    const token = readCookies("A");
    console.log("getOrderDetails");
    const response = await axios.post(orderApi.getOrderDetails, {
      token,
      order_id,
    });
    if (!response) {
      callBack(null);
    } else {
      callBack(response);
    }
  };
};
