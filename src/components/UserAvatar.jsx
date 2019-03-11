import React from "react";

export default function UserAvatar({ username, avatar_url, toggleModal}) {
  return (
    <img onClick={toggleModal} className="user-avatar"
      src={avatar_url}
      alt={`${username}'s avatar`}
      onError={e => {
        e.target.onerror = null;
        e.target.src = "https://image.flaticon.com/icons/svg/149/149071.svg";
      }}
    />
  );
}
