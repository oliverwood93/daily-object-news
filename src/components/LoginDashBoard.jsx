import React from "react";
import UserDropdown from "./UserDropdown";
import { Link } from "@reach/router";
import UserSignedInDisplay from "../components/UserSignedInDisplay";

export default function LoginDashBoard({ location: { pathname }, handleSignInUser, user , users}) {
  if (pathname !== "/login" && pathname !== `/account/${user}` && !user) {
    return (
      <div className="dashboard">
        <p>Login:</p> <UserDropdown id="dash-dropdown" handleSignInUser={handleSignInUser} users={users}/>
        <Link to="/login">Or Create Account</Link>
      </div>
    );
  } else if (user) return <UserSignedInDisplay />;
  else return null;
}
