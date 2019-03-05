import React from "react";

export default function ArticleDisplay({article}) {
  return (
    <article>
      <h3>{article.title}</h3>
      <h4>Topic: {article.topic}</h4>
      <h4>Author: {article.author}</h4>
      <p>{article.body}</p>
    </article>
  );
}
