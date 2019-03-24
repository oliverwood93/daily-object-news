import React from "react";
import CommentStub from "./CommentStub";
import Voter from "./Voter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../components/article/Article.css";

export default function CommentList({ comments, username, handleRemoveItem }) {
  return (
    <div className="comment-list">
      {comments.map(comment => {
        return (
          <Card key={comment.comment_id}>
            <Card.Body id="comment-list">
              <CommentStub comment={comment} />
              <div className="vote-container-comment">
                <Voter
                  articleOrComment={comment}
                  id={comment.comment_id}
                  path="/comments"
                  username={username}
                />
                {username === comment.author && (
                  <Button
                    className="delete-comment"
                    variant="danger"
                    value={comment.comment_id}
                    onClick={handleRemoveItem}
                  >
                    Delete
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
