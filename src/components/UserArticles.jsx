import React from "react";
import { Link } from "@reach/router";
import DatePosted from "./DatePosted";
import Paginator from './Paginator'

export default function UserArticles({ articleCount, articles, handlePageClick, page }) {
  return (
    <div>
      <h3>Articles</h3>
      <p>Total Articles Posted: {articleCount}</p>
      <hr/>
      <ul>
        {articles.map(article => (
          <Link key={article.article_id} to={`/articles/${article.article_id}`}>
            {" "}
            <li className="user-articles">
              {article.title} - <DatePosted createdAt={article.created_at} />{" "}
            </li>
          </Link>
        ))}
      </ul>
      <Paginator page={page} itemCount={articleCount} limit="5" handlePageClick={handlePageClick}/>
      <hr />
    </div>
  );
}
