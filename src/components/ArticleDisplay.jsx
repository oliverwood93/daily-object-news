import React from "react";
import DatePosted from './DatePosted'

export default function ArticleDisplay({article}) {
  return (
    <article className="article-display">
      <h3>{article.title}</h3>
      <DatePosted createdAt={article.created_at} />
      <h4>Topic: {article.topic}</h4>
      <h4>Author: {article.author}</h4>
      <p>{article.body}</p>
    </article>
  );
}
