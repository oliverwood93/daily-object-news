import React, { Component } from "react";
import { fetchArticles } from "../utils/api-requests";
import TopicSelector from "../components/TopicSelector";
import ArticleList from "../components/ArticleList";
import SortyBy from "../components/SortyBy";

class Articles extends Component {
  state = {
    articles: [],
    topic: null,
    sort_by: null,
    order: null
  };

  componentDidMount() {
    fetchArticles().then(articles => this.setState({ articles }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, sort_by, order } = this.state;
    const queryObj = {};
    if (topic && topic !== "") queryObj.topic = topic;
    if (sort_by && sort_by !== "") queryObj.sort_by = sort_by;
    if (order && order !== "") queryObj.order = order;

    if (prevState.topic !== topic || prevState.sort_by !== sort_by || prevState.order !== order) {
      fetchArticles(queryObj).then(articles => this.setState({ articles }));
    }
  }

  render() {
    const { articles } = this.state;
    const { handleClick, user, path } = this.props;
    return (
      <div>
        <h3>Articles</h3>
        <TopicSelector topics={this.props.topics} handleSelect={this.handleSelect} path={path} />
        <br />
        <SortyBy handleSubmit={this.handleSubmit} />
        <ArticleList articles={articles} handleClick={handleClick} user={user} />
      </div>
    );
  }
  handleSelect = event => {
    const topic = event.target.value;
    this.setState({ topic });
  };

  handleSubmit = event => {
    event.preventDefault();
    const sort_by = event.target[0].value;
    const order = event.target[1].value;
    this.setState({ sort_by, order });
  };
}

export default Articles;
