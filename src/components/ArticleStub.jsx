import React, { Fragment } from "react";
import DatePosted from "./DatePosted";
import { Card } from "react-bootstrap";

export default function ArticleStub({ article }) {
  return (
    <Fragment>
      <Card.Title>{article.title}</Card.Title>
      <DatePosted createdAt={article.created_at} />
      <Card.Text>{article.author}</Card.Text>
      <Card.Text>{article.topic}</Card.Text>
      <Card.Text>{article.body.slice(0, 160)}...</Card.Text>
      <Card.Text>Comments: {article.comment_count}</Card.Text>
    </Fragment>
  );
}
