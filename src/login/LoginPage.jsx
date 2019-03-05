import React from "react";
import UserDropdown from "../components/UserDropdown";

export default function LoginPage({ handleSignInUser }) {
  return (
    <div>
      <h3>Please Login Below:</h3>
      <UserDropdown  id="login-dropdown" handleSignInUser={handleSignInUser} />
      <form>
        <h3>Or Create an account:</h3>
        <input type="text" placeholder="Enter Username..." />
        <input type="text" placeholder="Enter Email..." />
        <input type="text" placeholder="Upload Avatar Url..." />
        <button>Submit</button>
      </form>
    </div>
  );
}
