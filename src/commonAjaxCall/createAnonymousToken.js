import axios from "axios";
import commonApi from "../api/common-api";

/* 
first parameter should always be  
object so that if we want to pass more argument in 
createAnonymousToken function then they can be added in  object as key-value pair.
*/
export const createAnonymousToken = async (object = {}, callback) => {
  const response = await axios.post(commonApi.createAnonymousToken);
  const {
    data: {
      data: { token = "", user_type = "", expiry_on = "" } = {},
      reponse_status = false,
    } = {},
  } = response;
  if (reponse_status) {
    document.cookie = `A=${token};expires=${new Date(expiry_on)}; path=/;`;
    document.cookie = `user_type=${user_type};expires=${new Date(expiry_on)}; path=/;`;
  }
  // add token in object
  const finalData = {
      ...object,
      token
  }
  typeof callback === "function" && callback(finalData);
};
