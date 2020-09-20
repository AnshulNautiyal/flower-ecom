import React from "react";
import { Link } from "react-router-dom";
import { useSignUpHook } from "./SignUpHooks";
import { Loader } from "./../../components/Common/Loader/Loader";

export const SignUp = () => {
  const {
    // user state
    userName,
    userPhone,
    userEmail,
    userPassword,
    validatePhoneFormat,
    validateEmailFormat,
    validatePassword,
    errorMessage,
    showPassword,
    showLoader,
    buttonDisable,
    // handle state change
    handleUserName,
    handleUserPhone,
    handleUserEmail,
    handleUserPassword,
    handlePasswordVisibility,
    // validate user info
    handleClientSideValidation,
    handlePasswordValidation,
    // submit phone data
    handleUserSignUp,
  } = useSignUpHook();

  const handleBackNavigation = () => window.history.back();

  const invalidPhoneNumberMessage = validatePhoneFormat && (
    <div className="error">Please enter a valid mobile number (10 digits)</div>
  );
  const invalidEmailMessage = validateEmailFormat && (
    <div className="error">Please enter a valid Email Address</div>
  );
  const invalidPasswordMessage = validatePassword && (
    <div className="error passwordErrorWidth">
      Password must be 6-20 character long with at least 1 lowercase character,
      1 uppercase character, 1 numeric and 1 special character.
    </div>
  );
  return (
    <>
    {showLoader && <Loader />}
    <div className="signUp">
      <div className="signUp__top">
        <span
          className="icon-arrow-left2"
          onClick={handleBackNavigation}
        ></span>
        <Link to="/signIn">Sign In</Link>
      </div>
      {/* <h1>Create Your Account</h1> */}
      <div className="signUp__logo"></div>
      <div className="signUp__form">
        <input
          type="text"
          name="user-name"
          placeholder="Enter Your Name"
          required={true}
          value={userName}
          onChange={handleUserName}
          className={`signUp__form--username 
          ${errorMessage.name ? "invalidUserName" : ""}
          `}
        />
        {errorMessage.name && <div className="error">{errorMessage.name}</div>}
        <input
          type="number"
          name="user-phone"
          placeholder="Mobile Number"
          required={true}
          value={userPhone}
          onChange={handleUserPhone}
          onBlur={handleClientSideValidation}
          className={`signUp__form--phone ${
            validatePhoneFormat || errorMessage.phone ? "invalidUserName" : ""
          }`}
        />
        {errorMessage.phone && !invalidPhoneNumberMessage && (
          <div className="error">{errorMessage.phone}</div>
        )}
        {invalidPhoneNumberMessage}
        <input
          type="email"
          name="user-email"
          placeholder="Email"
          required={true}
          value={userEmail}
          onChange={handleUserEmail}
          onBlur={handleClientSideValidation}
          className={`signUp__form--email ${
            validateEmailFormat || errorMessage.email ? "invalidUserName" : ""
          }`}
        />
        {invalidEmailMessage}
        {errorMessage.email && !invalidEmailMessage && (
          <div className="error">{errorMessage.email}</div>
        )}
        <div className="password">
          <input
            type={`${showPassword === "visibility_off" ? "password" : "text"}`}
            name="user-password"
            placeholder="Password"
            required={true}
            value={userPassword}
            onChange={handleUserPassword}
            onBlur={handlePasswordValidation}
            className={`signUp__form--password
          ${errorMessage.password || validatePassword? "invalidUserName" : ""}
          `}
          />
          {userPassword.length ? (
            <span className="material-icons" onClick={handlePasswordVisibility}>
              {showPassword}
            </span>
          ) : null}
        </div>
        {invalidPasswordMessage}
        {errorMessage.password && !invalidPasswordMessage && (
          <div className="error">{errorMessage.password}</div>
        )}

        <button disable={buttonDisable} onClick={handleUserSignUp}>Create Account</button>
      </div>
    </div>
    </>
  );
};
