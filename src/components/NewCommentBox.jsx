import React from "react";
import { Button } from "react-bootstrap";

export default function NewCommentBox({ handleBlur, handleSubmit, username }) {
  return (
    <form onSubmit={handleSubmit} className="new-comment-form">
      <textarea
        className="new-comment-text"
        disabled={!username}
        onBlur={handleBlur}
        required
        name="textbox"
        cols="40"
        rows="5"
        placeholder={!username ? "Please Sign-in or Create Account To Comment" : "Add a comment..."}
      />
      <Button className="new-comment-button" disabled={!username} type="Submit">
        Post Comment
      </Button>
    </form>
  );
}
