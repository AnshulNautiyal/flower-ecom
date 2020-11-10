import { useState } from "react";
import axios from "axios";
import { readCookies } from "../../utils/readBrowserCookies";
import { getQueryParameter } from "../../utils/QueryParameter";

export const useSignInHook = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [userNameValidation, handleUserNameValidation] = useState(false);
  const [showPassword, setPasswordVisibility] = useState("visibility_off");
  const [signInFail, setSignInFail] = useState(false);
  const [signInFailMessage, setSignInFailMessage] = useState("");

  return {
    userName,
    userPassword,
    userNameValidation,
    showPassword,
    showLoader,
    errorMessage,
    signInFail,
    signInFailMessage,
    handleUserInput: (e) => {
      const { value = "" } = e.target;
      setUserName(value);
      Object.keys(errorMessage).length && setErrorMessage({});
    },
    handleUserPassword: (e) => {
      const { value = "" } = e.target;
      setUserPassword(value);
      Object.keys(errorMessage).length && setErrorMessage({});
    },
    validateUserName: (e) => {
      const input = e.target.value;
      if (isNaN(input)) {
        handleUserNameValidation(false);
      } else {
        if (e.target.value.length === 10) {
          handleUserNameValidation(false);
        } else if (e.target.value.length > 0) {
          handleUserNameValidation(true);
        }
      }
    },
    handlePasswordVisibility: (e) => {
      const passwordVisible = e.target.innerText;
      if (passwordVisible === "visibility_off") {
        setPasswordVisibility("visibility");
      } else {
        setPasswordVisibility("visibility_off");
      }
    },
    handleUserSignIn: async (e) => {
      if (!userName.length) {
        setErrorMessage({
          name: "Please enter your full name",
        });
        return;
      } else if (!userPassword.length) {
        setErrorMessage({
          password: "Please enter your password",
        });
        return;
      }
      setShowLoader(true);
      const endPoint = "https://dreamnightsoftwares.com/flower/apis/login.php";
      const userCredential = {
        userId: userName,
        password: userPassword,
        token: readCookies("A") || "",
      };
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${btoa("flower:12Goee9*n-&B")}`,
      };

      if (!userNameValidation) {
        const response = await axios.post(endPoint, userCredential, headers);
        const {
          data: { reponse_status = "", error_code = "", data = {} } = {},
        } = response;
        const { token = "", user_type = "", expiry_on = "" } = data || {};
        if (reponse_status) {
          document.cookie = `A=${token};expires=${new Date(
            expiry_on
          )}; path=/;`;
          document.cookie = `user_type=${user_type};expires=${new Date(
            expiry_on
          )}; path=/;`;

          const referrer = getQueryParameter(window.location.search, "referrer");
          window.location = referrer ? referrer : "/";
        } else {
          setSignInFail(true);
          setSignInFailMessage(
            "Invalid Email/Phone number and Password combination"
          );
        }
        setShowLoader(false);
      }
    },
  };
};
