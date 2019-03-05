import React, { Component } from "react";
import { fetchArticleById, fetchArticleComments } from "../utils/api-requests";

class Article extends Component {
  state = {
    article: null,
    comments: []
  };
  componentDidMount() {
    return Promise.all([fetchArticleById(this.props.id), fetchArticleComments(this.props.id)]).then(
      ([article, comments]) => this.setState({ article, comments })
    );
  }
  render() {
    const { article, comments } = this.state;
    return article ? (
      <div>
      <article className="article">
        <h3>{article.title}</h3>
        <h4>Topic :{article.topic}</h4>
        <h4>Author: {article.author}</h4>
        <p>{article.body}</p>
      </article>
     
    <div className="comments-containter">
    </div>
      </div>
    ) : null;
    
  }
}

export default Article;
