import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function UserDropdown({ users, handleSignInUser, id, toggleModal }) {
  const path = window.location.pathname;
  return (
    <DropdownButton
      id={id}
      drop="down"
      variant="light"
      onSelect={e => {
        if (path !== "/login") toggleModal();
        handleSignInUser(e, path);
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
