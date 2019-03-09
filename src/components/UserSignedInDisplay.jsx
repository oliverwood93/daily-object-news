import React from "react";

export default function UserSignedInDisplay({ user, handleLogoutClick }) {
  return (
    <div className="dash-signed-in">
      <p className="signed-in-message">Signed in as: {user ? user.username : null}</p>
      <img className="user-avatar"
        src={user ? user.avatar_url : null}
        alt={`${user ? user.username : null}'s avatar`}
      />
      <button className="logout-button" onClick={handleLogoutClick}>Log Out</button>
    </div>
  );
}
