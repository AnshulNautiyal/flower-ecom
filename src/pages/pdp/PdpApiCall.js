import axios from "axios";
import pdpApi from "../../api/Pdp-api";
import { getPdpDataAction } from "./Pdp-action";
import { hideModal } from "../../components/Common/Modal/modal-action";

export const PdpData = (productCode) => {
  return async (dispatch) => {
    const pdp_response = await axios.post(pdpApi.getPdpData, productCode);
    const { data: { reponse_status = "", data = {} } = {} } = pdp_response;
    reponse_status && dispatch(getPdpDataAction(data));
    dispatch(hideModal(false));
  };
};
