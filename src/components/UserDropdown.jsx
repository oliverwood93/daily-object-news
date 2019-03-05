import React, { Component } from "react";
import { fetchUsers } from "../utils/api-requests";


export default class UserDropdown extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetchUsers().then(users => this.setState({ users }));
  }

  render() {
    const {users} = this.state;
    const { handleSignInUser} = this.props;
    return (
      <select onInput={handleSignInUser}>
        <option value="" defaultValue>Please select Username</option>
        {users.map(({ username }) => {
          return <option key={username} value={username}>{username}</option>;
        })}
      </select>
    );
  }
}
