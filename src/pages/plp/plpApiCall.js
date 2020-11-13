import axios from "axios";
import api from "../../api/Plp-api";
import {
  getPlpProductAction,
  plpFilterData,
  plpFetchDataFail,
} from "./plp-action";
import { hideLoader } from "../../components/Common/Loader/Loader-action";
import { hideModal } from "../../components/Common/Modal/modal-action";
import {
  hideToast,
  showToast,
} from "../../components/Common/Toast/Toast-action";

function getPlpData({
  category = "",
  price_range = "",
  color_id = "",
  page_no = "",
}) {
  const endPoint = api.getProductListInPlp;
  const filterData = {
    category,
    price_range,
    color_id,
    page_no,
  };

  return async (dispatch) => {
    const response = await axios.post(endPoint, filterData);
    const { data: { data = [], reponse_status = false } = {} } = response;
    dispatch(hideLoader(false));
    if (reponse_status) {
      dispatch(getPlpProductAction(data));
      dispatch(hideModal(false));
    } else {
      const { data: { errorMessage = ""} = {} } = response;
      dispatch(showToast());
      dispatch(plpFetchDataFail(`${errorMessage}.`));
      setTimeout(() => dispatch(hideToast()), 5000);
    }
  };
}

function getFilterData() {
  const filterApiEndpoint = api.getFilterData;
  return async (dispatch) => {
    const filterDataResponse = await axios.get(filterApiEndpoint);
    dispatch(hideLoader(false));
    const {
      data: { data = [], reponse_status = false } = {},
    } = filterDataResponse;
    reponse_status && dispatch(plpFilterData(data));
  };
}

export { getPlpData, getFilterData };
