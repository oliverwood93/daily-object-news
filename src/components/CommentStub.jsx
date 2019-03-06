import React from "react";
import moment from "moment";

export default function CommentStub({ comment }) {
  const { comment_id, author, body, created_at } = comment;
  return (
    <article key={comment_id} className="comment">
      <h5>{author}</h5>
      <p>{body}</p>
      <p> Posted: {moment(created_at).format("MMMM Do YYYY, h:mm:ss a")}</p>
    </article>
  );
}
