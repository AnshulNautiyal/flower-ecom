import React from "react";

const Alert = ({ message = "" }) => {
  return (
    <div className="alert">
      <ion-icon name="alert-circle-outline"></ion-icon>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
