import React from "react";
import UserAvatar from "./UserAvatar";

export default function UserSignedInDisplay({ user, handleLogoutClick }) {
  const { username, avatar_url } = user;
  return (
    <div className="dash-signed-in">
      <p className="signed-in-message">Signed in as: {username}</p>
      <UserAvatar username={username} avatar_url={avatar_url} />
      <button className="logout-button" onClick={handleLogoutClick}>
        Log Out
      </button>
    </div>
  );
}
