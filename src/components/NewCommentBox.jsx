import React from "react";

export default function NewCommentBox({ handleBlur, handleSubmit, user }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          disabled={!user}
          onBlur={handleBlur}
          required
          name="textbox"
          cols="40"
          rows="5"
          placeholder={
            !user ? "Please Sign-in or Create Account To Comment" : "Add a comment..."
          }
        />
        <button disabled={!user} type="Submit">
          Post Comment
        </button>
      </form>
    </div>
  );
}
