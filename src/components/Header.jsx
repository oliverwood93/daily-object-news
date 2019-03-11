import React, { Component, Fragment } from "react";
import LoginDashBoard from "./LoginDashBoard";
import UserAvatar from "./UserAvatar";
import UserSignedInDisplay from "./UserSignedInDisplay";

export default class Header extends Component {
  state = {
    showModal: false
  };

  render() {
    const { user, username, users, handleLogoutClick, handleSignInUser } = this.props;
    const { showModal } = this.state;
    return (
      <div className="header-container">
        <h1 className="site-header">The Daily Object News {"{ }"}</h1>
        {!user ? (
          <Fragment>
            <img
              onClick={() => this.setState({ showModal: !showModal })}
              className="login-icon"
              src="https://image.flaticon.com/icons/svg/1538/1538032.svg"
              alt="Login Icon"
            />
            <LoginDashBoard
              className="login-dashboard"
              handleSignInUser={handleSignInUser}
              handleLogoutClick={handleLogoutClick}
              user={user}
              users={users}
              username={username}
              show={showModal}
              toggleModal={this.toggleModal}
            />
          </Fragment>
        ) : (
          <Fragment>
              <UserAvatar className="user-avatar" username={username} avatar_url={user.avatar_url} toggleModal={this.toggleModal}/>
            <UserSignedInDisplay user={user} handleLogoutClick={handleLogoutClick} toggleModal={this.toggleModal} show={showModal}/>
          </Fragment>
        )}
      </div>
    );
  }
  toggleModal = () => {
    const {showModal} = this.state
    this.setState({ showModal: !showModal });
  };
}
