import React, { Component } from "react";
import { fetchArticles } from "../utils/api-requests";
import mapArticlesData from "../utils/utils";
import TopicSelector from "./components/TopicSelector";

class Articles extends Component {
  state = {
    articles: [],
    selectedTopic: null
  };

  componentDidMount() {
    fetchArticles({}).then(articles => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h3>Articles</h3>
        <TopicSelector topics={this.props.topics}/>
        {mapArticlesData(articles)}
      </div>
    );
  }
  
}

export default Articles;
