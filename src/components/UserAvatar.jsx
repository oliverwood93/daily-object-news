import React from "react";

export default function UserAvatar({username, avatar_url}) {
  return (
    <img className="user-avatar"
      src={avatar_url}
      alt={`${username}'s avatar`}
      onError={e => {
        e.target.onerror = null;
        e.target.src = "https://image.flaticon.com/icons/svg/149/149071.svg";
      }}
    />
  );
}
