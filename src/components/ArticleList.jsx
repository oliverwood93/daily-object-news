import React from "react";

export default function ArticleList({articles}) {
  return articles.map(article => {
    return (
      <article key={article.article_id}>
        <h4>{article.title}</h4>
        <p>{article.author}</p>
        <p>{article.topic}</p>
        <p>
          Comments: {article.comment_count} Votes: {article.votes}
        </p>
      </article>
    );
  });
}
