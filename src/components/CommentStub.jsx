import React from "react";
import DatePosted from './DatePosted'

export default function CommentStub({ comment }) {
  const { comment_id, author, body, created_at } = comment;
  return (
    <article key={comment_id} className="comment">
      <h5>{author}</h5>
      <p>{body}</p>
      <DatePosted createdAt={created_at}/>
    </article>
  );
}
