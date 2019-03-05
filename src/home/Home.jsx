import React, { Component } from "react";
import { fetchArticles } from "../utils/api-requests";
import ArticleList from '../components/ArticleList'

class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetchArticles({ limit: 5 }).then(articles => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    const { handleClick } = this.props;
    return (
      <div>
        <h3>Home: Latest News</h3>
        <ArticleList articles={articles} handleClick={handleClick}/>
      </div>
    );
  }
}

export default Home;
