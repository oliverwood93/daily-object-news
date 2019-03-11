import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function UserDropdown({ users, handleSignInUser, id }) {
  return (
    <DropdownButton id={id} drop="down" variant="light" onSelect={(e) => handleSignInUser(e, window.location.pathname)} title="Please Select Username" >
      {users.map(({ username }) => {
        return (
          <Dropdown.Item eventKey={username} key={username}>
            {username}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
}
