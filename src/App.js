import React, { Component } from "react";
import { Router } from "@reach/router";
import { fetchTopicsOrUsers } from "./utils/api-requests";
import Home from "./components/home/Home";
import Articles from "./components/articles/Articles";
import Article from "./components/article/Article";
import SideMenu from "./components/SideMenu";
import LoginPage from "./components/login/LoginPage";
import LoginDashboard from "./components/LoginDashBoard";
import PostArticlePage from "./components/post-article-page/PostArticlePage";
import ErrorPage from "./components/error/ErrorPage";

import "./App.css";

class App extends Component {
  state = {
    user: null,
    topics: [],
    users: []
  };

  componentDidMount() {
    fetchTopicsOrUsers("topics").then(topics => this.setState({ topics }));
    fetchTopicsOrUsers("users").then(users => this.setState({ users }));
  }

  render() {
    const { topics, user, users } = this.state;
    return (
      <div className="App">
        <h1 className="site-header">The Daily Object News</h1>
        <SideMenu user={user} handleLogoutClick={this.handleLogoutClick} />
        <Router>
          <LoginDashboard
            path="/*"
            className="login-dashboard"
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
          <PostArticlePage path="/articles/:username/new_post" user={user} topics={topics} />
          <LoginPage
            path="/login"
            handleSignInUser={this.handleSignInUser}
            users={users}
            user={user}
          />
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
