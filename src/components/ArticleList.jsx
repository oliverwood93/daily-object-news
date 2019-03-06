import React, { Fragment } from "react";
import ArticleStub from "./ArticleStub";
import Voter from "./Voter";

export default function ArticleList({ articles }) {
  return (
    <div>
      <ul>
        {articles.map(article => {
          return (
            <li key={article.article_id} className="article-list">
              <ArticleStub article={article} />
              <Voter votes={article.votes} id={article.article_id} path="/articles"/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
