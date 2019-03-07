import React from "react";

export default function UserSignedInDisplay({ signedInUsersInfo, handleLogoutClick }) {
  const { username, avatar_url } = signedInUsersInfo;
  return (
    <div>
      <p>{username}</p>
      <img src={avatar_url} alt={`${username}'s avatar`} />
      <button onClick={handleLogoutClick}>Log Out</button>
    </div>
  );
}
