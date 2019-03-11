import React, { Component } from "react";
import { patchVotes } from "../utils/api-requests";
import Button from 'react-bootstrap/Button'

export default class Voter extends Component {
  state = {
    changedVote: 0
  };

  render() {
    const { votes, username } = this.props;
    const { changedVote } = this.state;
    return (
      <div>
        <p>Votes: {votes + changedVote}</p>
        <Button
          disabled={!username}
          onClick={() => this.handleVoteClick(changedVote === -1 ? 1 : -1)}
        >
          Down Vote
        </Button>
        <Button
          disabled={!username}
          onClick={() => this.handleVoteClick(changedVote === 1 ? -1 : 1)}
        >
          Up Vote
        </Button>
      </div>
    );
  }
  handleVoteClick = vote => {
    const { id, path } = this.props;
    patchVotes(id, vote, path)
    this.setState(prevState => {
      return {
        changedVote: prevState.changedVote + vote
      };
    });
  };
}
