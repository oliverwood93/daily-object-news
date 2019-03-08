import React, { Component } from "react";
import { navigate } from "@reach/router";
import { fetchArticleById, deleteArticleOrComment } from "../utils/api-requests";
import ArticleDisplay from "../components/ArticleDisplay";
import Voter from "../components/Voter";
import CommentSection from "../components/CommentSection";

export default class Article extends Component {
  state = {
    article: [],
    isDeleted: false
  };
  componentDidMount() {
    const { id } = this.props;
    fetchArticleById(id)
      .then(article => this.setState({ article }))
      .catch(({ response }) =>
        navigate("/error", {
          replace: true,
          state: {
            code: response.status,
            message: response.data,
            fromPath: `/articles/${id}`
          }
        })
      );
  }
  render() {
    const { article, isError, isDeleted } = this.state;
    const { user } = this.props;
    console.log(this.props)
    if (isError) return <h2>{isError}</h2>;
    if (isDeleted) return <h2>Your Article Has Been Removed</h2>
    else
      return (
        <div>
          <ArticleDisplay article={article} />
          <div id="article-page-voter">
            <Voter votes={article.votes} id={article.article_id} path="/articles" user={user} />
          </div>
          <br />
          {user === article.author && (
            <button onClick={this.handleRemoveItem} value={article.article_id}>
              Delete Your Article
            </button>
          )}
          <CommentSection articleId={this.props.id} user={user} />
        </div>
      );
  }
  handleRemoveItem = event => {
    const articleToRemoveId = +event.target.value;
    const path = 'articles'
    deleteArticleOrComment(articleToRemoveId, path).then(status => {
      if (status === 204) this.setState({ isDeleted: true });
    });
  };
}
