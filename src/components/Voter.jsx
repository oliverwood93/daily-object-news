import React, { Component, Fragment } from "react";
import { patchVotes } from "../utils/api-requests";
import Button from "react-bootstrap/Button";

export default class Voter extends Component {
  state = {
    changedVote: 0
  };

  render() {
    const { article, username } = this.props;
    const { changedVote } = this.state;
    const fullOrListView = ["/", "/articles"].includes(window.location.pathname) ? "list" : "full";
    return (
      <Fragment>
        <p className={`vote-count-${fullOrListView}`}>Votes: {article.votes + changedVote}</p>
        <p className={`comment-count-${fullOrListView}`}>Comments: {article.comment_count}</p>

        <hr />
        <Button
          className={`downvote-button-${fullOrListView}`}
          variant="outline-danger"
          disabled={!username}
          onClick={() => this.handleVoteClick(changedVote === -1 ? 1 : -1)}
        >
          Down Vote
        </Button>
        <Button
          className={`upvote-button-${fullOrListView}`}
          variant="outline-success"
          disabled={!username}
          onClick={() => this.handleVoteClick(changedVote === 1 ? -1 : 1)}
        >
          Up Vote
        </Button>
      </Fragment>
    );
  }
  handleVoteClick = vote => {
    const { id, path } = this.props;
    patchVotes(id, vote, path);
    this.setState(prevState => {
      return {
        changedVote: prevState.changedVote + vote
      };
    });
  };
}
