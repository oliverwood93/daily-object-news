import React from "react";
import { Link } from "@reach/router";
import DatePosted from "./DatePosted";

export default function ArticleStub({ article }) {
  return (
    <article className="article-stub">
      <h4>{article.title}</h4>
      <DatePosted createdAt={article.created_at} />
      <p>{article.author}</p>
      <p>{article.topic}</p>
      <p>Comments: {article.comment_count}</p>
    </article>
  );
}
