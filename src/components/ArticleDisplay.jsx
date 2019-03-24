import React from "react";
import DatePosted from "./DatePosted";
import Card from "react-bootstrap/Card";

export default function ArticleDisplay({ article }) {
  return (
    <Card className="article-display">
      <Card.Header className="article-title">{article.title}</Card.Header>
      <Card.Body>
        <Card.Text className="topic-title">* {article.topic} *</Card.Text>
        <DatePosted className="date-article-full" createdAt={article.created_at} fullDate={true} />
        <Card.Text>{article.body}</Card.Text>
        <Card.Text className="author">- By {article.author}</Card.Text>
      </Card.Body>
    </Card>
  );
}
