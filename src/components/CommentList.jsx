import React from "react";
import CommentStub from "./CommentStub";
import Voter from "./Voter";

export default function CommentList({ comments }) {
  return (
    <div>
      <ul>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id} className="comment-list">
              <CommentStub comment={comment} />
              <Voter votes={comment.votes} id={comment.comment_id} path="/comments"/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
