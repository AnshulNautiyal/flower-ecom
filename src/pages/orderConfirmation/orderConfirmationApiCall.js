import axios from "axios";
import orderApi from "../../api/orderConfirmation-api";
import { readCookies } from "../../utils/readBrowserCookies";

export const getOrderDetails = (order_id) => {
  return async (dispatch) => {
    const token = readCookies("A");
    const response = await axios.post(orderApi.getOrderDetails, { token,order_id:order_id });
    const {
      data: { reponse_status = "", data = {} } = {},
    } = response;
    const { items_in_cart = "", order_details = {}, cart_items = [] } =
      data || {};
    dispatch(setCartShimmer(false));
    if (reponse_status) {
      
    } else {
      
    }
  };
};


