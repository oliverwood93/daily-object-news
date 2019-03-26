import React, { Component } from "react";
import { fetchArticles } from "../../utils/api-requests";
import ArticleList from "../ArticleList";
import Card from "react-bootstrap/Card";

class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetchArticles({ limit: 5 }).then(({ articles }) => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    const { handleClick, username, path } = this.props;
    return (
      <div>
        <Card className="home-header">

            <h4>Home: Latest News</h4>
        
        </Card>
        <ArticleList
          articles={articles}
          handleClick={handleClick}
          username={username}
          path={path}
        />
      </div>
    );
  }
}

export default Home;
