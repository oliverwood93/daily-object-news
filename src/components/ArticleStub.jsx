import React from "react";
import { Link } from "@reach/router";

export default function ArticleStub({ article }) {
  return (
    <li className="article-stub">
      <article>
        <h4>{article.title}</h4>
        <p>{article.author}</p>
        <p>{article.topic}</p>
        <p>
          Comments: {article.comment_count}
        </p>
        <Link to={`/articles/${article.article_id}`}>
          <button>more</button>
        </Link>
      </article>
    </li>
  );
}
