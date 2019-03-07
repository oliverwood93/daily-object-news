import React from "react";

export default function CreateAccountForm({
  handleSubmit,
  handleUsernameChange,
  handleNameChange,
  handleAvartUrlChange
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Or Create an account:</h3>
        <input
          onChange={handleUsernameChange}
          required
          type="text"
          placeholder="Enter Username..."
        />
        <input onChange={handleNameChange} required type="text" placeholder="Enter Name..." />
        <input
          onChange={handleAvartUrlChange}
          required
          type="text"
          placeholder="Upload Avatar Url..."
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
