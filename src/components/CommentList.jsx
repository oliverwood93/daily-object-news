import React from "react";
import CommentStub from "./CommentStub";
import Voter from "./Voter";
import { Button, Card } from "react-bootstrap";

export default function CommentList({ comments, username, handleRemoveItem }) {
  return (
    <div>
      {comments.map(comment => {
        return (
          <Card key={comment.comment_id} className="comment-list">
            <Card.Body>
              <CommentStub comment={comment} />
              <div className="vote-container-comment">
                <Voter
                  articleOrComment={comment}
                  id={comment.comment_id}
                  path="/comments"
                  username={username}
                />
                {username === comment.author && (
                  <Button className="delete-comment" variant="danger" value={comment.comment_id} onClick={handleRemoveItem}>
                    Delete Your Comment
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
