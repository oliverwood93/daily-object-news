import React from "react";

export default function NewCommentBox({ handleBlur, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          onBlur={handleBlur}
          required
          name="textbox"
          cols="40"
          rows="5"
          placeholder="Add a comment..."
        />
        <button type="Submit">Post Comment</button>
      </form>
    </div>
  );
}
