import React from "react";
import { Link } from "@reach/router";
import ArticleStub from "./ArticleStub";
import Voter from "./Voter";
import Paginator from "./Paginator";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ArticleList({
  articles,
  username,
  handleRemoveItem,
  handlePageClick,
  articleCount,
  page,
  path
}) {
  return (
    <div className="articles-container">
      {articleCount <= 0 && <p>There are currently no articles for this topic</p>}
      {articles.map(article => {
        return (
          <Card key={article.article_id} className="article-list-card">
            <Card.Body>
              <ArticleStub article={article} />
              <div className="comment-vote-list-container">
                <Voter
                  className="article-list-voter"
                  articleOrComment={article}
                  id={article.article_id}
                  path="/articles"
                  username={username}
                />

                <Link className="more-button" to={`/articles/${article.article_id}`}>
                  <Button variant="outline-secondary">more</Button>
                </Link>
              </div>
              <br />
              {path !== "/" && username === article.author && (
                <Button variant="danger" onClick={handleRemoveItem} value={article.article_id}>
                  Delete Your Article
                </Button>
              )}
            </Card.Body>
          </Card>
        );
      })}
      <Paginator
        page={page}
        itemCount={articleCount}
        limit="10"
        handlePageClick={handlePageClick}
      />
    </div>
  );
}
