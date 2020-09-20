import axios from "axios";
import api from "../../api/Plp-api";
import { getPlpProductAction } from "./plp-action";

function getPlpData({
  category = "",
  price_range = "",
  color_id = "",
  page_no = "",
}) {
  const endPoint = api["getProductListInPlp"];
  const filterData = {
    category,
    price_range,
    color_id,
    page_no,
  };

  return async (dispatch) => {
    const response = await axios.post(
      endPoint,
      filterData
    );
    const { data : { data = [], reponse_status = false } = {} } = response;
    if (reponse_status) {
      dispatch(getPlpProductAction(data));
    }
  };
}

export default getPlpData;
