import React from "react";
import { Link } from "@reach/router";
import ArticleStub from "./ArticleStub";
import Voter from "./Voter";
import Paginator from "./Paginator";
import { Card, Button } from "react-bootstrap";

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
            <Card key={article.article_id} className="article-list-card" >
              <Card.Body>
                <ArticleStub article={article} />
              <Voter
                votes={article.votes}
                id={article.article_id}
                path="/articles"
                username={username}
              />
              <hr />

              <Link to={`/articles/${article.article_id}`}>
                <Button>more</Button>
              </Link>
              <br />
              {path !== "/" && username === article.author && (
                <Button variant="danger" onClick={handleRemoveItem} value={article.article_id}>
                  Delete Your Article
                </Button>
              )}
              </Card.Body>
            </Card>
            // </li>
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
