import React, { Component } from "react";
import { fetchArticleById, fetchArticleComments } from "../utils/api-requests";
import ArticleDisplay from '../components/ArticleDisplay'
import CommentsDisplay from '../components/CommentsDisplay'

class Article extends Component {
  state = {
    article: [],
    comments: []
  };
  componentDidMount() {
    return Promise.all([fetchArticleById(this.props.id), fetchArticleComments(this.props.id)]).then(
      ([article, comments]) => this.setState({ article, comments })
    );
  }
  render() {
    const { article, comments } = this.state;
    return (
      <div>
      <ArticleDisplay article ={article}/>
      <CommentsDisplay comments={comments} />
      </div>
    )

    
  }
}

export default Article;
