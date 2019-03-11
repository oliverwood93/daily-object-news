import React from "react";
import UserAvatar from "./UserAvatar";
import {Badge, Button} from 'react-bootstrap';

export default function UserSignedInDisplay({ user, handleLogoutClick }) {
  const { username, avatar_url } = user;
  return (
    <Badge pill variant="dark" className="dash-signed-in">
      <p className="signed-in-message">Signed in as: {username}</p>
      <UserAvatar username={username} avatar_url={avatar_url} />
      <Button className="logout-button" onClick={handleLogoutClick}>
        Log Out
      </Button>
    </Badge>
  );
}
