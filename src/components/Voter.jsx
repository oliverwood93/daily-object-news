import React, { Component } from "react";
import { patchVotes } from "../utils/api-requests";

export default class Voter extends Component {
  state = {
    changedVote: 0
  };

  // componentDidUpdate(prevProps){
  //   if (prevProps.user !== this.props.user) {
  //     this.render()
  //   }
  // }

  render() {
    const { votes, username } = this.props;
    const { changedVote } = this.state;
    return (
      <div>
        <p>Votes: {votes + changedVote}</p>
        <button
          disabled={!username}
          onClick={() => this.handleVoteClick(changedVote === -1 ? 1 : -1)}
        >
          Down Vote
        </button>
        <button
          disabled={!username}
          onClick={() => this.handleVoteClick(changedVote === 1 ? -1 : 1)}
        >
          Up Vote
        </button>
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
