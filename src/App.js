import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import { fetchTopics } from "./utils/api-requests";
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Article from "./article/Article";
import SideMenu from "./components/SideMenu";
import LoginPage from "./login/LoginPage";
import LoginDashboard from "./components/LoginDashBoard"
import Account from './account/Account'

import "./App.css";

class App extends Component {
  state = {
    user: '',
    topics: []
  };

  componentDidMount() {
    fetchTopics().then(topics => this.setState({ topics }));
  }

  render() {
    const { topics, user } = this.state;
    return (
      <div className="App">
        <h1 className="site-title">The Daily Object News</h1>
        <SideMenu user={user}/>
        <Router>
          <LoginDashboard path="/*" handleSignInUser={this.handleSignInUser} user={user}/>
        </Router>
        <Router className="router">
          <Home path="/" user={user}/>
          <Articles path="/articles" topics={topics} user={user}/>
          <Article path="/articles/:id" user={user}/>
          <LoginPage path="/login" handleSignInUser={this.handleSignInUser} />
          <Account path="/account/:user" />
        </Router>
      </div>
    );
  }
  handleSignInUser = event => {
    const user = event.target.value;
    this.setState({user})

  };
}

export default App;
