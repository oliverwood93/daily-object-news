import React, { Component } from "react";
import { patchVotes } from "../utils/api-requests";

export default class Voter extends Component {
  state = {
    changedVote: 0
  };

  render() {
    const { votes } = this.props;
    const { changedVote } = this.state;
    return (
      <div>
        <p>Votes: {votes + changedVote}</p>
        <button onClick={() => this.handleVoteClick(changedVote === 1 ? -1 : 1)}>Up Vote</button>
        <button onClick={() => this.handleVoteClick(changedVote === -1 ? 1 : -1)}>Down Vote</button>
      </div>
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
