import React, { Component } from "react";
import { fetchArticles } from "../utils/api-requests";
import TopicSelector from "../components/TopicSelector";
import ArticleList from "../components/ArticleList";
import SortyBy from "../components/SortyBy";
import { deleteArticleOrComment } from "../utils/api-requests";

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
    if (topic && topic.slug !== "") queryObj.topic = topic.slug;
    if (sort_by && sort_by !== "") queryObj.sort_by = sort_by;
    if (order && order !== "") queryObj.order = order;

    if (prevState.topic !== topic || prevState.sort_by !== sort_by || prevState.order !== order) {
      fetchArticles(queryObj).then(articles => this.setState({ articles }));
    }
  }

  render() {
    const { articles, topic } = this.state;
    const { handleClick, user, path, topics } = this.props;

    return (
      <div>
        <h3>Articles</h3>
        {topic && <h4>{topic.slug} - {topic.description}</h4>}
        <TopicSelector topics={topics} handleSelectTopic={this.handleSelectTopic} path={path} />
        <br />
        <SortyBy handleSubmit={this.handleSubmit} />
        <ArticleList
          articles={articles}
          handleClick={handleClick}
          user={user}
          handleRemoveItem={this.handleRemoveItem}
        />
      </div>
    );
  }
  handleSelectTopic = event => {
    const { topics } = this.props
    const slug = event.target.value;
    const topic = topics.find(topic => topic.slug === slug)
    this.setState({ topic });
  };

  handleSubmit = event => {
    event.preventDefault();
    const sort_by = event.target[0].value;
    const order = event.target[1].value;
    this.setState({ sort_by, order });
  };
  handleRemoveItem = event => {
    const articleToRemoveId = +event.target.value;
    const { path } = this.props;
    deleteArticleOrComment(articleToRemoveId, path).then(status => {
     
      if (status === 204)
        this.setState(({ articles }) => {
          return {
            articles: articles.filter(article => article.article_id !== articleToRemoveId)
          };
        });
    });
  };
}

export default Articles;
