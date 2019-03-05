import React from "react";
import { Link } from "@reach/router";

export default function ArticleList({ articles, handleClick }) {
  return articles.map(article => {
    return (
      <article key={article.article_id} id={article.article_id}>
        <h4>{article.title}</h4>
        <p>{article.author}</p>
        <p>{article.topic}</p>
        <p>
          Comments: {article.comment_count} Votes: {article.votes}
        </p>
        <Link to={`/article/${article.article_id}`} >
          <button>
            more
          </button>
        </Link>
      </article>
    );
  });
}
