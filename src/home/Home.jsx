import React, { Component } from "react";
import fetchArticles from '../utils/api-requests'
import mapArticlesData from '../utils/utils'

class Home extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    fetchArticles({limit: 5}).then(articles => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h3>Home: Latest News</h3>
        {mapArticlesData(articles)}
      </div>
    );
  }
}


export default Home;
