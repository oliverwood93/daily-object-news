import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./home/Home";
import Articles from './articles/Articles'
import SideMenu from "./components/SideMenu";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="site-title">The Daily Object News</h1>
        <SideMenu />
        <Router className="router">
          <Home path="/" />
          <Articles path="/articles" />
          <Home path="/login" />
        </Router>
      </div>
    );
  }
}

export default App;
