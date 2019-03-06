import React, { Component } from "react";
import { fetchArticleById } from "../utils/api-requests";
import ArticleDisplay from "../components/ArticleDisplay";
import Voter from "../components/Voter";
import CommentSection from "../components/CommentSection";

class Article extends Component {
  state = {
    article: []
  };
  componentDidMount() {
    fetchArticleById(this.props.id).then(article => this.setState({ article }));
  }
  render() {
    const { article } = this.state;
    return (
      <div>
        <ArticleDisplay article={article} />
        <div id="article-page-voter">
          <Voter votes={article.votes} id={article.article_id} path="/articles" />
        </div>
        <CommentSection articleId={this.props.id} user={this.props.user}/>
      </div>
    );
  }
}

export default Article;
