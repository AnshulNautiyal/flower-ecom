import React from "react";

export default function Header() {
  return (
    <div className="header-section">
      <h1>Flower</h1>
      <p>
        <a href="/signin?referrer=/">SignIn</a>/
        <a href="/signup?referrer=/">SignUp</a>
      </p>
    </div>
  );
}
