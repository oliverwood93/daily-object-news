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
  handleLogoutClick
}) {
  const {pathname} = location
  const signedInUsersInfo = users.find(({ username }) => username === user);
  if (pathname !== "/login" && pathname !== `/account/${user}` && !user && pathname !== '/error') {
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
        signedInUsersInfo={signedInUsersInfo}
        handleLogoutClick={handleLogoutClick}
      />
    );
  else return null;
}
