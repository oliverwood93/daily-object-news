import React, { Component } from "react";
import { fetchArticleById, fetchArticleComments } from "../utils/api-requests";
import ArticleDisplay from '../components/ArticleDisplay'
import CommentList from '../components/CommentList'
import NewCommentBox from '../components/NewCommentBox'

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
      <NewCommentBox />
      <CommentList comments={comments} />
      </div>
    )

    
  }
}

export default Article;
