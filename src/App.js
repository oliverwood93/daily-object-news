import React, { Component } from "react";
import { Router } from "@reach/router";
import { fetchTopics } from "./utils/api-requests";
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Article from "./article/Article";
import SideMenu from "./components/SideMenu";
import LoginPage from "./login/LoginPage";
// import UserDropdown from "./components/UserDropdown";
import LoginDashboard from "./components/LoginDashBoard"

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
    const { topics } = this.state;
    return (
      <div className="App">
        <h1 className="site-title">The Daily Object News</h1>
        <SideMenu />
        <Router>
          <LoginDashboard path="/*" handleSignInUser={this.handleSignInUser}/>
        </Router>
        <Router className="router">
          <Home path="/" />
          <Articles path="/articles" topics={topics} />
          <Article path="/articles/:id" />
          <LoginPage path="/login" handleSignInUser={this.handleSignInUser} />
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
