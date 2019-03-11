import React from "react";
import CommentStub from "./CommentStub";
import Voter from "./Voter";
import {Button} from 'react-bootstrap'

export default function CommentList({ comments, username, handleRemoveItem }) {
  return (
    <div>
      <ul>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id} className="comment-list">
              <CommentStub comment={comment} />
              <Voter votes={comment.votes} id={comment.comment_id} path="/comments" username={username} />
              {username === comment.author && (
                <Button variant ="danger" value={comment.comment_id} onClick={handleRemoveItem}>Delete Your Comment</Button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
