import axios from "axios";
import pdpApi from "../../api/Pdp-api";
import { getPdpDataAction, cartTotalItem } from "./Pdp-action";
import { httpMessageAction } from "../../redux/httpMessage";
import { hideModal } from "../../components/Common/Modal/modal-action";
import { readCookies } from "../../utils/readBrowserCookies";
import { baseUrl } from "../../routes/Routes";

export const PdpData = (productCode) => {
  return async (dispatch) => {
    const pdp_response = await axios.post(pdpApi.getPdpData, productCode);
    const { data: { reponse_status = "", data = {} } = {} } = pdp_response;
    if (reponse_status) {
      dispatch(getPdpDataAction(data));
      dispatch(getCartCount());
    }
  };
};
export const getCartCount = () => {
  return async (dispatch) => {
    const A = readCookies("A");
    const response = await axios.post(pdpApi.pdpCartCount, { token: A });
    const {
      data: { reponse_status = "", data = {} } = {},
    } = response;
    const { items_in_cart = "" } = data || {};
    reponse_status && dispatch(cartTotalItem(items_in_cart));
    // dispatch(hideModal(false));
  };
};

export const AddToCart = (item) => {
  return async (dispatch) => {
    const response = await axios.post(pdpApi.pdpAddToCart, item);
    const {
      data: {
        reponse_status = "",
        errorMessage = "",
        error_code = "",
        data = {},
      } = {},
    } = response;
    const { items_in_cart = "", token = "" } = data || {};
    dispatch(hideModal(false));
    if (reponse_status) {
      if (error_code === "-1" && token) {
        document.cookie = `A=${token}; path=/;`;
      }
      dispatch(cartTotalItem(items_in_cart));
      if (errorMessage === "success") {
        dispatch(httpMessageAction("Product added in bag"));
      } else {
        dispatch(httpMessageAction(errorMessage));
      }
    } else {
      if (error_code === "-2" && token) {
        document.cookie = `A=""; path=/;`;
        window.location.href = `${window.location.hostname}/${baseUrl}/signin?referrer=${window.location.pathname}`;
      } else {
        // show toast message
        dispatch(httpMessageAction(errorMessage));
      }
    }
    // clear message after 2s
    setTimeout(() => {
      dispatch(httpMessageAction(""));
    }, 2000);
  };
};
