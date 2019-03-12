import React, { Component } from "react";
import { navigate } from "@reach/router";
import { fetchArticleOrComments, deleteArticleOrComment } from "../../utils/api-requests";
import ArticleDisplay from "../ArticleDisplay";
import Voter from "../Voter";
import CommentSection from "../CommentSection";
import { Button } from "react-bootstrap";
import './Article.css'

export default class Article extends Component {
  state = {
    article: [],
    isDeleted: false
  };

  componentDidMount() {
    const { id } = this.props;
    fetchArticleOrComments(id, "article")
      .then(({ article }) => this.setState({ article }))
      .catch(({ message, response }) => {
        if (message === "Network Error") return navigate("/error", { state: { code: 500 } });
        else
          navigate("/error", {
            replace: true,
            state: {
              code: response.status,
              message: response.data
            }
          });
      });
  }
  render() {
    const { article, isDeleted } = this.state;
    const { username } = this.props;
    if (isDeleted) return <h2>Your Article Has Been Removed</h2>;
    else {
      return (
        <div>
          <ArticleDisplay article={article} />
          <div id="article-page-voter">
            <Voter
              votes={article.votes}
              id={article.article_id}
              path="/articles"
              username={username}
            />
          </div>
          <br />
          {username === article.author && (
            <Button variant="danger" onClick={this.handleRemoveItem} value={article.article_id}>
              Delete Your Article
            </Button>
          )}
          <CommentSection articleId={this.props.id} username={username} />
        </div>
      );
    }
  }
  handleRemoveItem = event => {
    const articleToRemoveId = +event.target.value;
    const path = "articles";
    deleteArticleOrComment(articleToRemoveId, path)
      .then(status => {
        if (status === 204) this.setState({ isDeleted: true });
      })
      .catch(({ response }) =>
        navigate("/error", {
          state: {
            code: response.status,
            message: response.data,
            fromPath: path
          }
        })
      );
  };
}
