import React from "react";

export default function NewCommentBox({ handleBlur, handleSubmit, username }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          disabled={!username}
          onBlur={handleBlur}
          required
          name="textbox"
          cols="40"
          rows="5"
          placeholder={
            !username ? "Please Sign-in or Create Account To Comment" : "Add a comment..."
          }
        />
        <button disabled={!username} type="Submit">
          Post Comment
        </button>
      </form>
    </div>
  );
}
