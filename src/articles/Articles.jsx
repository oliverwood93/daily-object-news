import React, { Component } from "react";
import { fetchArticles } from "../utils/api-requests";
import TopicSelector from "../components/TopicSelector";
import ArticleList from "../components/ArticleList";
import SortyBy from '../components/SortyBy'

class Articles extends Component {
  state = {
    articles: [],
    selectedTopic: null,
    sortAndOrder: null
  };

  componentDidMount() {
    fetchArticles().then(articles => this.setState({ articles }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedTopic } = this.state;
    if (prevState.selectedTopic !== selectedTopic) {
      fetchArticles(selectedTopic ? { topic: selectedTopic } : null).then(articles =>
        this.setState({ articles })
      );
    }
  }

  render() {
    const { articles } = this.state;
    const { handleClick } = this.props;
    return (
      <div>
        <h3>Articles</h3>
        <TopicSelector topics={this.props.topics} handleSelect={this.handleSelect} />
        <br/>
        <SortyBy handleSubmit={this.handleSubmit}/>
        <ArticleList articles={articles} handleClick={handleClick}/>
      </div>
    );
  }
  handleSelect = event => {
    const selectedTopic = event.target.value;
    this.setState({ selectedTopic });
  };

  handleSubmit = event => {
    event.preventDefault()
    const sortAndOrder = {
      sort_by: event.target[0].value,
      order: event.target[1].value
    }
    this.setState({sortAndOrder})

  }
}

export default Articles;
