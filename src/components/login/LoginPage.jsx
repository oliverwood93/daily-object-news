import React, { Component } from "react";
import { Link } from "@reach/router";
import UserDropdown from "../UserDropdown";
import CreateAccountForm from "../CreateAccountForm";
import { postUser } from "../../utils/api-requests";

export default class LoginPage extends Component {
  state = {
    username: null,
    name: null,
    avatar_url: null,
    addedUser: null
  };
  render() {
    const { handleSignInUser, users, user } = this.props;
    const { addedUser, name } = this.state;
    if (!addedUser && !user) {
      return (
        <div>
          <h3>Please Login Below:</h3>
          <UserDropdown id="login-dropdown" handleSignInUser={handleSignInUser} users={users} />
          <CreateAccountForm
            handleSubmit={this.handleSubmit}
            handleUsernameChange={this.handleUsernameChange}
            handleNameChange={this.handleNameChange}
            handleAvartUrlChange={this.handleAvartUrlChange}
          />
        </div>
      );
    } else if (addedUser) {
      return (
        <div>
          <p>Thank you for creating an account {name}, please click here to go to the home page.</p>
          <Link to="/">
            <button value={addedUser} onClick={handleSignInUser}>
              Home Page
            </button>
          </Link>
        </div>
      );
    } else return <p>You have successfully logged in.</p>;
  }

  handleUsernameChange = event => {
    const username = event.target.value;
    this.setState({ username });
  };
  handleNameChange = event => {
    const name = event.target.value;
    this.setState({ name });
  };
  handleAvartUrlChange = event => {
    const avatar_url = event.target.value;
    this.setState({ avatar_url });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { userAddSuccessful, ...newUserInfo } = this.state;
    postUser(newUserInfo).then(user => {
      if (user) this.setState({ addedUser: user.username });
    });
  };
}
