import { useState } from "react";
import axios from "axios";

export const useSignUpHook = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [validatePhoneFormat, handlePhoneValidation] = useState(false);
  const [validateEmailFormat, handleEmailValidation] = useState(false);
  const [validatePassword, setPasswordValidation] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [showPassword, setPasswordVisibility] = useState("visibility_off");

  return {
    userName,
    userPhone,
    userEmail,
    userPassword,
    validateEmailFormat,
    validatePhoneFormat,
    validatePassword,
    errorMessage,
    showPassword,
    showLoader,
    handleUserName: (e) => {
      const { value = "" } = e.target;
      setUserName(value);
      Object.keys(errorMessage).length && setErrorMessage({});
    },
    handleUserPhone: (e) => {
      const { value = "" } = e.target;
      setUserPhone(value);
      Object.keys(errorMessage).length && setErrorMessage({});
    },
    handleUserEmail: (e) => {
      const { value = "" } = e.target;
      setUserEmail(value);
      Object.keys(errorMessage).length && setErrorMessage({});
    },
    handleUserPassword: (e) => {
      const { value = "" } = e.target;
      setUserPassword(value);
      Object.keys(errorMessage).length && setErrorMessage({});
    },
    handleClientSideValidation: (e) => {
      const input = e.target.value;
      if (isNaN(input)) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validateEmail = emailRegex.test(userEmail);
        validateEmail
          ? handleEmailValidation(false)
          : handleEmailValidation(true);
      } else {
        if (e.target.value.length === 10) {
          handlePhoneValidation(false);
        } else if (e.target.value.length > 0) {
          handlePhoneValidation(true);
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
    handlePasswordValidation: (e) => {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      const passValidate = passwordRegex.test(userPassword);
      console.log(passValidate)
      if (passValidate) {
        setPasswordValidation(false);
      } else {
        setPasswordValidation(true);
      }
    },
    handleUserSignUp: async (e) => {
      if (!userName.length) {
        setErrorMessage({
          name: "Please enter your full name",
        });
        return;
      } else if (!userPhone.length) {
        setErrorMessage({
          phone: "Please enter your phone number",
        });
        return;
      } else if (!userEmail.length) {
        setErrorMessage({
          email: "Please enter your email id",
        });
        return;
      } else if (!userPassword.length) {
        setErrorMessage({
          password: "Please set your password",
        });
        return;
      } else if (
        validateEmailFormat ||
        validatePhoneFormat ||
        validatePassword
      ) {
        return;
      }
      if (!validateEmailFormat && !validatePhoneFormat) {
        setShowLoader(true);
        const endPoint =
          "https://dreamnightsoftwares.com/flower/apis/signup.php";
        const userCredential = {
          name: userName,
          phone: userPhone,
          email: userEmail,
          password: userPassword,
        };
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Basic ${btoa("flower:12Goee9*n-&B")}`,
        };

        const response = await axios.post(endPoint, userCredential, headers);
        response.data.reponse_status && (window.location = "/");
        setShowLoader(false);
      }
    },
  };
};
