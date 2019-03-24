import React, { Component, Fragment } from "react";
import { patchVotes } from "../utils/api-requests";
import Button from "react-bootstrap/Button";

export default class Voter extends Component {
  state = {
    changedVote: 0
  };

  render() {
    const { articleOrComment, username } = this.props;
    const { changedVote } = this.state;
    const fullOrListView = ["/", "/articles"].includes(window.location.pathname) ? "list" : "full";
    return (
      <Fragment>
        <p className={`vote-count-${fullOrListView}`}>
          Votes: {articleOrComment.votes + changedVote}
        </p>
        {articleOrComment.comment_count && (
          <p className={`comment-count-${fullOrListView}`}>
            Comments: {articleOrComment.comment_count}
          </p>
        )}

      
        <Button
          className={`downvote-button-${fullOrListView}`}
          variant="outline-danger"
          disabled={!username}
          onClick={e => {
            this.handleVoteClick(changedVote === -1 ? 1 : -1);
            this.removeButtonHighlight(e);
          }}
          // onClick={this.removeButtonHighlight}
        >
          Down Vote
        </Button>
        <Button
          id={`upbutton-${changedVote === 1 ? "enabled" : "disabled"}`}
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

  removeButtonHighlight = e => {
    e.target.removeEventListener("click", () => this.handleVoteClick);
  };
}
