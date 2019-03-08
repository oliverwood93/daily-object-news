import React from "react";

export default function UserSignedInDisplay({ signedInUsersInfo, handleLogoutClick }) {
  const { username, avatar_url } = signedInUsersInfo;
  return (
    <div className="dash-signed-in">
      <p className="signed-in-message">Signed in as: {username}</p>
      <img className="user-avatar"
        src={avatar_url}
        alt={`${username}'s avatar`}
      />
      <button className="logout-button" onClick={handleLogoutClick}>Log Out</button>
    </div>
  );
}
