import React from "react";
import Button from "react-bootstrap/Button";

export default function CreateAccountForm({ handleSubmit, handleInput }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Or Create an account:</h3>
        <input
          onChange={handleInput}
          required
          type="text"
          placeholder="Enter Username..."
          name="username"
          autoComplete="off"
        />
        <br />
        <br />
        <input
          name="name"
          onChange={handleInput}
          required
          type="text"
          placeholder="Enter Name..."
          autoComplete="off"
        />
        <br />
        <br />
        <input
          onChange={handleInput}
          name="avatar_url"
          required
          type="text"
          placeholder="Upload Avatar Url..."
          autoComplete="off"
        />
        <br />
        <br />
        <Button type="submit" variant="success">
          Submit
        </Button>
      </form>
    </div>
  );
}
