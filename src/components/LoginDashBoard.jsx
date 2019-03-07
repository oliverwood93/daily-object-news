import React from "react";
import UserDropdown from "./UserDropdown";
import { Link } from "@reach/router";
import UserSignedInDisplay from "../components/UserSignedInDisplay";

export default function LoginDashBoard({
  location: { pathname },
  handleSignInUser,
  user,
  users,
  handleLogoutClick
}) {
  const signedInUsersInfo = users.find(({ username }) => username === user);
  if (pathname !== "/login" && pathname !== `/account/${user}` && !user) {
    return (
      <div className="dashboard">
        <p>Login:</p>{" "}
        <UserDropdown id="dash-dropdown" handleSignInUser={handleSignInUser} users={users} />
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
