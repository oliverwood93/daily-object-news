import React, { Component } from "react";

export default class Voter extends Component {
  state = {
    changedVote: 0
  };

  render() {
    const {votes} = this.props
    const {changedVote} = this.state
    return (
      <div>
        <p>Votes: {votes + changedVote}</p>
        <button onClick={() => this.handleVoteClick(1)}>Up Vote</button>
        <button onClick={() => this.handleVoteClick(-1)}>Down Vote</button>
      </div>
    );
  }
handleVoteClick = (vote) => {

}
}
