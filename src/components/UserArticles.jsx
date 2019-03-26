import React from "react";
import { Link } from "@reach/router";
import Card from "react-bootstrap/Card";
import moment from "moment";
import Paginator from "./Paginator";

export default function UserArticles({ articleCount, articles, handlePageClick, page }) {
  return (
    <div>
      <h3>Articles</h3>
      <p>Total Articles Posted: {articleCount}</p>
      <hr />
      <ul>
        {articles.map(article => (
          <div>
            <Card className="user-article-card">
              <Link
                key={article.article_id}
                to={`/articles/${article.article_id}`}
                className="user-articles-link"
              >
                {article.title} - {moment(article.createdAt).format("MMMM Do YYYY, h:mm a")}
              </Link>
            </Card>
          </div>
        ))}
      </ul>
      <Paginator page={page} itemCount={articleCount} limit="5" handlePageClick={handlePageClick} />
      <hr />
    </div>
  );
}
