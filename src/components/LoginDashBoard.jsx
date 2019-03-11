import React from "react";
import UserDropdown from "./UserDropdown";
import { Link } from "@reach/router";
import UserSignedInDisplay from "../components/UserSignedInDisplay";
import '../css/LoginDashBoard.css'
import {Badge} from 'react-bootstrap'

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
      <Badge pill variant="dark" className="login-badge">
        <p id="login-text">Login:</p>{" "}
        <UserDropdown id="dash-dropdown" handleSignInUser={handleSignInUser} users={users} path={pathname}/>
        <br/>
        <Link className="create-account-link" to="/login">Or Create Account</Link>
      </Badge>
    );
  } else if (user && pathname !== `/account/${username}`)
    return (
      <UserSignedInDisplay 
        // signedInUsersInfo={signedInUsersInfo}
        user={user}
        handleLogoutClick={handleLogoutClick}
      />
    );
  else return null;
}
