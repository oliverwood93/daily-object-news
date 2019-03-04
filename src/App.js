import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./home/Home";
import Articles from "./articles/Articles";
import SideMenu from "./components/SideMenu";
import "./App.css";
import { fetchTopics } from "./utils/api-requests";

class App extends Component {
  state = {
    user: null,
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
        <Router className="router">
          <Home path="/" />
          <Articles path="/articles" topics={topics} />
          <Home path="/login" />
        </Router>
      </div>
    );
  }
}

export default App;
