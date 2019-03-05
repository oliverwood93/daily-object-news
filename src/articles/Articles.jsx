import React, { Component } from "react";
import { fetchArticles } from "../utils/api-requests";
import TopicSelector from "../components/TopicSelector";
import ArticleList from '../components/ArticleList'

class Articles extends Component {
  state = {
    articles: [],
    selectedTopic: null
  };

  componentDidMount() {
    fetchArticles().then(articles => this.setState({ articles }));
  }

  componentDidUpdate(prevProps, prevState) {
    const {selectedTopic} = this.state
    if (prevState.selectedTopic !== selectedTopic) {
      fetchArticles(selectedTopic ? {topic: selectedTopic } : null).then(articles =>
        this.setState({ articles })
      );
    }
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h3>Articles</h3>
        <TopicSelector topics={this.props.topics} handleSelect={this.handleSelect} />
        <ArticleList articles={articles}/>
      </div>
    );
  }
  handleSelect = event => {
    const selectedTopic = event.target.value;
    this.setState({ selectedTopic });
  };
}

export default Articles;
