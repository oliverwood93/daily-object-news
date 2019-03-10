import React, { Component } from "react";
import { fetchArticles } from "../../utils/api-requests";
import ArticleList from '../ArticleList'

class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetchArticles({ limit: 5 }).then(({articles}) => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    const { handleClick, username, path } = this.props;
    return (
      <div>
        <h3>Home: Latest News</h3>
        <ArticleList articles={articles} handleClick={handleClick} username={username} path={path}/>
      </div>
    );
  }
}

export default Home;
