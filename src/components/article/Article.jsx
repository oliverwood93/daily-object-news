import React, { Component } from "react";
import { navigate } from "@reach/router";
import { fetchArticleById, deleteArticleOrComment } from "../../utils/api-requests";
import ArticleDisplay from "../ArticleDisplay";
import Voter from "../Voter";
import CommentSection from "../CommentSection";

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
    const { username } = this.props;
    if (isError) return <h2>{isError}</h2>;
    if (isDeleted) return <h2>Your Article Has Been Removed</h2>
    else
      return (
        <div>
          <ArticleDisplay article={article} />
          <div id="article-page-voter">
            <Voter votes={article.votes} id={article.article_id} path="/articles" username={username} />
          </div>
          <br />
          {username === article.author && (
            <button onClick={this.handleRemoveItem} value={article.article_id}>
              Delete Your Article
            </button>
          )}
          <CommentSection articleId={this.props.id} username={username} />
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
