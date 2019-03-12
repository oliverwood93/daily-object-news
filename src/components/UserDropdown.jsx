import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function UserDropdown({ users, handleSignInUser, id, toggleModal }) {
  return (
    <DropdownButton
      id={id}
      drop="down"
      variant="light"
      onSelect={e => {
        toggleModal();
        handleSignInUser(e, window.location.pathname);
      }}
      title="Please Select Username"
    >
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
