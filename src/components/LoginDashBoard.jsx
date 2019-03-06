import React from "react";
import UserDropdown from "./UserDropdown";
import { Link } from "@reach/router";

export default function LoginDashBoard({location: {pathname}, handleSignInUser, user}) {
  
    return pathname !== "/login" && pathname  !== `/account/${user}` ? (
      <div className="dashboard">
        <p>Login:</p> <UserDropdown id="dash-dropdown" handleSignInUser={handleSignInUser} />
        <Link to="/login">Or Create Account</Link>
      </div>
    ) : null
  
}
