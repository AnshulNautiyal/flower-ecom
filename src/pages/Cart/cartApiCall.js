import axios from "axios";
import cartApi from "../../api/cart-api";
import { readCookies } from "../../utils/readBrowserCookies";
import {
  setCartItem,
  setCartOrderDetails,
  setCartItemCount,
  setCartShimmer,
  setBagEmpty,
} from "./cart-action";
import {
  hideModal,
} from "../../components/Common/Modal/modal-action";

export const getCartItem = () => {
  return async (dispatch) => {
    const token = readCookies("A");
    const response = await axios.post(cartApi.getCartData, { token });
    const {
      data: { reponse_status = "", data = {} } = {},
    } = response;
    const { items_in_cart = "", order_details = {}, cart_items = [] } =
      data || {};
    dispatch(setCartShimmer(false));
    if (reponse_status) {
      dispatch(setCartItem(cart_items));
      dispatch(setCartOrderDetails(order_details));
      dispatch(setCartItemCount(items_in_cart));
      if (items_in_cart === 0) {
        dispatch(setBagEmpty(true));
      } else {
        dispatch(setBagEmpty(false));
      }
    } else {
      dispatch(setBagEmpty(true));
    }
  };
};

export const removeCartItem = (id) => {
  return async (dispatch) => {
    const token = readCookies("A");
    const response = await axios.post(cartApi.removeCartItemApi, {
      token,
      cart_item_id: id,
    });
    const {
      data: { reponse_status = "", data = {} } = {},
    } = response;
    const { items_in_cart = "", order_details = {}, cart_items = [] } =
      data || {};

    dispatch(hideModal());
    if (reponse_status) {
      dispatch(setCartItem(cart_items));
      dispatch(setCartOrderDetails(order_details));
      dispatch(setCartItemCount(items_in_cart));
      if (items_in_cart === 0) {
        dispatch(setBagEmpty(true));
      } else {
        dispatch(setBagEmpty(false));
      }
    } else {
      dispatch(setBagEmpty(true));
    }
  };
};


export const updateQuantityCall = (id,quantity) => {
  return async (dispatch) => {
    const token = readCookies("A");
    const response = await axios.post(cartApi.updateQuantity, {
      token,
      cart_item_id: id,
      quantity
    });
    const {
      data: { reponse_status = "", error_code = "", data = {} } = {},
    } = response;
    const { items_in_cart = "", order_details = {}, cart_items = [] } =
      data || {};

    dispatch(hideModal());
    if (reponse_status) {
      dispatch(setCartItem(cart_items));
      dispatch(setCartOrderDetails(order_details));
      dispatch(setCartItemCount(items_in_cart));
      if (items_in_cart === 0) {
        dispatch(setBagEmpty(true));
      } else {
        dispatch(setBagEmpty(false));
      }
    } else {
      error_code !== "-3" && dispatch(setBagEmpty(true));
    }
  };
};
