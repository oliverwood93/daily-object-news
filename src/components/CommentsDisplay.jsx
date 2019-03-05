import React from "react";
import moment from 'moment'

export default function CommentsDisplay({ comments }) {
  return (
    <div>
      {comments.map(({comment_id, author, body, votes, created_at }) => {
        return (
          <article key={comment_id} className="comment">
            <h5>{author}</h5>
            <p>{body}</p>
            <p>Votes: {votes}</p>
            <p> Posted: {moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
          </article>
        );
      })}
    </div>
  );
}
