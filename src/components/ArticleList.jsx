import React from "react";
import { Link } from "@reach/router";
import ArticleStub from "./ArticleStub";
import Voter from "./Voter";
import Paginator from './Paginator'
import "../transition.css";

export default function ArticleList({ articles, username, handleRemoveItem, handlePageClick, articleCount, page }) {
  return (
    <div>
      {articleCount <= 0 && <p>There are currently no articles for this topic</p>}
      <ul>
        {articles.map(article => {
          return (
            <li key={article.article_id} className="article-list-item">
              <ArticleStub article={article} />
              <Voter votes={article.votes} id={article.article_id} path="/articles" username={username} />

              <Link to={`/articles/${article.article_id}`}>
                <button>more</button>
              </Link>
              <br />
              {username === article.author && (
                <button onClick={handleRemoveItem} value={article.article_id}>
                  Delete Your Article
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <Paginator page={page} itemCount={articleCount} limit="10" handlePageClick={handlePageClick} />
    </div>
  );
}
