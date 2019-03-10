import React from "react";
import "./Account.css";

export default function Account({ user }) {
  if (user) {
    const { username, name, avatar_url } = user;

    return (
      <div>
        <h2>Account</h2>
        <span className="account-name-img-header">
          <img src={avatar_url} alt={`${username}'s avatar`} /> <h3>{username}</h3>
        </span>
      </div>
    );
  } else return null
}
