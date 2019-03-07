import React from "react";
import CommentStub from "./CommentStub";
import Voter from "./Voter";

export default function CommentList({ comments, user, handleRemoveItem }) {
  return (
    <div>
      <ul>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id} className="comment-list">
              <CommentStub comment={comment} />
              <Voter votes={comment.votes} id={comment.comment_id} path="/comments" user={user} />
              {user === comment.author && (
                <button value={comment.comment_id} onClick={handleRemoveItem}>Delete Your Comment</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
