import React from "react";

export default function UserDropdown({ users, handleSignInUser}) {
  return (
    <select defaultValue="Please select Username" onInput={handleSignInUser} >
      <option disabled>
        Please select Username
      </option>
      {users.map(({username}) => {
        return (
          <option key={username} value={username}>
            {username}
          </option>
        );
      })}
    </select>
  );
}
