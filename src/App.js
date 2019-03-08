import React, { Component } from "react";
import { Router } from "@reach/router";
import { fetchTopics, fetchUsers } from "./utils/api-requests";
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Article from "./article/Article";
import SideMenu from "./components/SideMenu";
import LoginPage from "./login/LoginPage";
import LoginDashboard from "./components/LoginDashBoard";
import Account from "./account/Account";
import PostNewArticle from "./post-new-article/PostNewArticle";
import ErrorPage from './error/ErrorPage'

import "./App.css";

class App extends Component {
  state = {
    user: null,
    topics: [],
    users: []
  };

  componentDidMount() {
    fetchTopics().then(topics => this.setState({ topics }));
    fetchUsers().then(users => this.setState({ users }));
  }

  render() {
    const { topics, user, users } = this.state;
    return (
      <div className="App">
        <h1 className="site-title">The Daily Object News</h1>
        <SideMenu user={user} handleLogoutClick={this.handleLogoutClick} />
        <Router>
          <LoginDashboard
            path="/*"
            handleSignInUser={this.handleSignInUser}
            handleLogoutClick={this.handleLogoutClick}
            user={user}
            users={users}
          />
        </Router>
        <Router className="router">
          <Home path="/" user={user} />
          <Articles path="/articles" topics={topics} user={user} />
          <Article path="/articles/:id" user={user} />
          <PostNewArticle path="/articles/:username/new_post" user={user} topics={topics} />
          <LoginPage
            path="/login"
            handleSignInUser={this.handleSignInUser}
            users={users}
            user={user}
          />
          <Account path="/account/:user" />
          <ErrorPage path="/error" />
          <ErrorPage path="/*" />
        </Router>
      </div>
    );
  }
  handleSignInUser = event => {
    const user = event.target.value;
    this.setState({ user });
  };
  handleLogoutClick = () => {
    this.setState({ user: null });
  };
}

export default App;
