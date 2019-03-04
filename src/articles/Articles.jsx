import React, { Component } from "react";
import fetchArticles from "../utils/api-requests";
import mapArticlesData from "../utils/utils";

class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetchArticles({}).then(articles => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h3>Articles</h3>
       {mapArticlesData(articles)}
      </div>
    );
  }
}

export default Articles;
