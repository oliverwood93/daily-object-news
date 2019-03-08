import React from "react";
import { Link } from "@reach/router";
import Img from 'react-image'

export default function UserSignedInDisplay({ signedInUsersInfo, handleLogoutClick }) {
  const { username, avatar_url } = signedInUsersInfo;
  return (
    <div>
      <p>{username}</p>
      <Img
        src={[avatar_url, "https://www.eyedocs.co.uk/components/com_community/assets/user-anon.png"]}
        alt={`${username}'s avatar`}
      />
      <Link to={`/account/${username}`}>
        <button>View Account</button>
      </Link>
      <button onClick={handleLogoutClick}>Log Out</button>
    </div>
  );
}
