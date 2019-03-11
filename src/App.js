import React, { Component } from "react";
import { Router } from "@reach/router";
import { fetchTopicsOrUsers, fetchUser } from "./utils/api-requests";
import Home from "./components/home/Home";
import Articles from "./components/articles/Articles";
import Article from "./components/article/Article";
import SideMenu from "./components/SideMenu";
import LoginPage from "./components/login/LoginPage";
import LoginDashboard from "./components/LoginDashBoard";
import PostArticlePage from "./components/post-article-page/PostArticlePage";
import Account from "./components/account/Account";
import ErrorPage from "./components/error/ErrorPage";
import { navigate } from "@reach/router";
import "./App.css";

class App extends Component {
  state = {
    user: null,
    username: null,
    topics: [],
    users: []
  };

  componentDidMount() {
    const cachedUser = JSON.parse(localStorage.getItem("user"));
    if (cachedUser) {
      this.setState({ user: cachedUser, username: cachedUser.username });
    }
    fetchTopicsOrUsers("topics").then(({topics}) => this.setState({ topics }));
    fetchTopicsOrUsers("users").then(({users}) => this.setState({ users }));
  }

  render() {
    const { topics, user, users, username } = this.state;
    return (
      <div className="App">
        <h1 className="site-header">The Daily Object News {"{ }"}</h1>
        <SideMenu username={username} handleLogoutClick={this.handleLogoutClick} />
        <Router>
          <LoginDashboard
            path="/*"
            className="login-dashboard"
            handleSignInUser={this.handleSignInUser}
            handleLogoutClick={this.handleLogoutClick}
            user={user}
            users={users}
            username={username}
          />
        </Router>
        <Router className="router">
          <Home path="/" username={username} />
          <Articles path="/articles" topics={topics} username={username} />
          <Article path="/articles/:id" username={username} />
          <PostArticlePage
            path="/articles/:username/new_post"
            loggedInUser={username}
            topics={topics}
          />
          <LoginPage
            path="/login"
            handleSignInUser={this.handleSignInUser}
            users={users}
            user={user}
          />
          <Account
            path="/account/:username"
            user={user}
            handleLogoutClick={this.handleLogoutClick}
          />
          <ErrorPage path="/error" />
          <ErrorPage path="/*" />
        </Router>
      </div>
    );
  }
  handleSignInUser = (event, path) => {
    const userToSignIn = event
    fetchUser(userToSignIn).then(user => {
      this.setState({ user, username: userToSignIn });
      localStorage.setItem("user", JSON.stringify(user));
      if (path.includes("/articles/guest/new_post")) {
        navigate(`/articles/${userToSignIn}/new_post`);
      }
    });
  };
  handleLogoutClick = () => {
    this.setState({ user: null, username: null });
    localStorage.setItem("user", "null");
    navigate("/login", { state: { userLoggedOut: true } });
  };
}

export default App;
