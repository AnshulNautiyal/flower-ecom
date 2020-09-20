import React from "react";
import { Link } from "react-router-dom";
import { useSignInHook } from "./SignInHooks";
import { Loader } from "../../components/Common/Loader/Loader";

// Add show password functionality and forgot password link
export const SignIn = () => {
  const {
    userName,
    userPassword,
    userNameValidation,
    showPassword,
    showLoader,
    errorMessage,
    signInFail,
    signInFailMessage,
    handleUserInput,
    handleUserPassword,
    validateUserName,
    handleUserSignIn,
    handlePasswordVisibility,
  } = useSignInHook();

  const handleBackNavigation = () => window.history.back();
  const invalidPhoneNumberMessage = userNameValidation && (
    <div className="invalidMobileNumber">
      Please enter a valid mobile number (10 digits)
    </div>
  );

  const sigInInFailMessage = signInFail && (
    <div className="signInError">
      {signInFailMessage}
    </div>
  );



  return (
    <>
      {showLoader && <Loader />}
      <div className="signIn">
        <div className="signIn__top">
          <span
            className="icon-arrow-left2"
            onClick={handleBackNavigation}
          ></span>
          <Link to="/signup">Create Account</Link>
        </div>
        <h1>Sign In</h1>
        <div className="signIn__logo"></div>
        <div className="signIn__form">
          <input
            type="text"
            className={`signIn__form--username ${
              userNameValidation || errorMessage.name ? "invalidUserName" : ""
            }`}
            name="user-name"
            placeholder="Email / Mobile Number"
            required
            value={userName}
            onChange={handleUserInput}
            onBlur={validateUserName}
          />
          {invalidPhoneNumberMessage}
          {errorMessage.name && (
            <div className="error">{errorMessage.name}</div>
          )}

          <div className="password">
            <input
              type={`${
                showPassword === "visibility_off" ? "password" : "text"
              }`}
              name="user-name"
              placeholder="Password"
              required
              value={userPassword}
              onChange={handleUserPassword}
              className={`signIn__form--password
          ${userNameValidation || errorMessage.password ? "invalidUserName" : ""}
          `}
            />
            {userPassword.length ? (
              <span
                className="material-icons"
                onClick={handlePasswordVisibility}
              >
                {showPassword}
              </span>
            ) : null}
          </div>
          {errorMessage.password && (
            <div className="error">{errorMessage.password}</div>
          )}
          {sigInInFailMessage}
          <button onClick={handleUserSignIn}>sign in</button>
        </div>
      </div>
    </>
  );
};
