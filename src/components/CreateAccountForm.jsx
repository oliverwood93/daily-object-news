import React from "react";
import Button from 'react-bootstrap/Button'

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
        <br />
        <br />
        <input onChange={handleNameChange} required type="text" placeholder="Enter Name..." />
        <br />
        <br />
        <input
          onChange={handleAvartUrlChange}
          required
          type="text"
          placeholder="Upload Avatar Url..."
        />
        <br />
        <br />
        <Button variant="success" >Submit</Button>
      </form>
    </div>
  );
}
