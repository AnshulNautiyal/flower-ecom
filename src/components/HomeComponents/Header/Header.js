import React from "react";

export default function Header() {
  return (
    <div className="header-section">
      <h1>Flower</h1>
      <p>
        <a href="/signin">SignIn</a>/<a href="/signup">SignUp</a>
      </p>
    </div>
  );
}
