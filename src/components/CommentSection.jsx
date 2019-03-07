import React, { Component, Fragment } from "react";
import NewCommentBox from "./NewCommentBox";
import { postComment, fetchArticleComments } from "../utils/api-requests";
import CommentList from "../components/CommentList";
import { deleteArticleOrComment } from "../utils/api-requests";

export default class CommentSection extends Component {
  state = {
    comments: [],
    commentToAdd: null
  };

  componentDidMount() {
    fetchArticleComments(this.props.articleId).then(comments => this.setState({ comments }));
  }
  render() {
    const { comments } = this.state;
    const { user } = this.props;
    return (
      <Fragment>
        <NewCommentBox handleBlur={this.handleBlur} handleSubmit={this.handleSubmit} user={user} />
        <CommentList comments={comments} user={user} handleRemoveItem={this.handleRemoveItem} />
      </Fragment>
    );
  }
  handleBlur = event => {
    const commentToAdd = event.target.value;
    this.setState({ commentToAdd });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { articleId, user } = this.props;
    const { commentToAdd } = this.state;
    postComment(articleId, user, commentToAdd).then(addedComment =>
      this.setState(prevState => {
        return { comments: addedComment.concat(prevState.comments) };
      })
    );
  };
  handleRemoveItem = event => {
    const commentToRemoveId = +event.target.value;
    deleteArticleOrComment(commentToRemoveId, 'comments').then(status => {
      if (status === 204)
        this.setState(({ comments }) => {
          return {
            comments: comments.filter(comment => comment.comment_id !== commentToRemoveId)
          };
        });
    });
  };
}
