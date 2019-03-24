import React, { Fragment } from "react";
import DatePosted from "./DatePosted";
import Card from "react-bootstrap/Card";

export default function ArticleStub({ article }) {
  return (
    <Fragment>
      <Card.Title>{article.title}</Card.Title>
      <Card.Subtitle className="topic-title-onstub">{article.topic}</Card.Subtitle>
      <DatePosted className="date-article-list" createdAt={article.created_at} />
      <Card.Text>{article.body.slice(0, 160)}...</Card.Text>
      <Card.Text className="author-onstub">- By {article.author}</Card.Text>
      <hr />
    </Fragment>
  );
}
