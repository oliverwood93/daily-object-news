import React, { Component } from "react";
import {navigate} from '@reach/router'
import { fetchArticleById } from "../utils/api-requests";
import ArticleDisplay from "../components/ArticleDisplay";
import Voter from "../components/Voter";
import CommentSection from "../components/CommentSection";

export default class Article extends Component {
  state = {
    article: []
  };
  componentDidMount() {
    const { id } = this.props;
    fetchArticleById(id)
      .then(article => this.setState({ article }))
      .catch(({ response }) =>
      console.log(response) ||
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
    const { article, isError } = this.state;
    const { user } = this.props;
    if (isError) return <h2>{isError}</h2>;
    else
      return (
        <div>
          <ArticleDisplay article={article} />
          <div id="article-page-voter">
            <Voter votes={article.votes} id={article.article_id} path="/articles" user={user} />
          </div>
          <CommentSection articleId={this.props.id} user={user} />
        </div>
      );
  }
}
