import React from "react";
import UserDropdown from "./UserDropdown";
import { Link } from "@reach/router";
import UserSignedInDisplay from "../components/UserSignedInDisplay";
import '../css/LoginDashBoard.css'

export default function LoginDashBoard({
  location,
  handleSignInUser,
  user,
  users,
  username,
  handleLogoutClick
}) {
  const {pathname} = location
  if (pathname !== "/login" && pathname !== `/account/${username}` && !user && pathname !== '/error') {
    return (
      <div className="dash-login">
        <p>Login:</p>{" "}
        <UserDropdown id="dash-dropdown" handleSignInUser={handleSignInUser} users={users} />
        <br/>
        <Link to="/login">Or Create Account</Link>
      </div>
    );
  } else if (user)
    return (
      <UserSignedInDisplay 
        // signedInUsersInfo={signedInUsersInfo}
        user={user}
        handleLogoutClick={handleLogoutClick}
      />
    );
  else return null;
}
