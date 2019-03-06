import React from "react";
import { Link } from "@reach/router";
import ArticleStub from "./ArticleStub";
import Voter from "./Voter";

export default function ArticleList({ articles, user }) {
  return (
    <div>
      <ul>
        {articles.map(article => {
          return (
            <li key={article.article_id} className="article-list">
              <ArticleStub article={article} />
              <Voter votes={article.votes} id={article.article_id} path="/articles" user={user}/>
              <Link to={`/articles/${article.article_id}`}>
                <button>more</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
