import React from "react";
import UserDropdown from "./UserDropdown";

export default function LoginDashBoard(props) {
  return (
    <div>
      {props.location.pathname !== "/login" && (
        <UserDropdown id="dash-dropdown" handleSignInUser={props.handleSignInUser} />
      )}
    </div>
  );
}
