import React, { Fragment } from "react";
import ArticleStub from "./ArticleStub";
import Voter from "./Voter";

export default function ArticleList({ articles }) {
  return articles.map(article => {
    return (
      <div key={article.article_id}>
        <ArticleStub article={article} />
        <Voter votes={article.votes} id={article.article_id}/>
      </div>
    );
  });
}
