import React, { Component } from "react";
import { fetchArticles, deleteArticleOrComment } from "../../utils/api-requests";
import TopicSelector from "../TopicSelector";
import ArticleList from "../ArticleList";
import SortyBy from "../SortyBy";
import { navigate } from "@reach/router";

class Articles extends Component {
  state = {
    articles: [],
    topic: null,
    sort_by: null,
    order: null,
    currentPage: 1,
    articleCount: null
  };

  componentDidMount() {
    fetchArticles().then(({ articles, total_count }) =>
      this.setState({ articles, articleCount: total_count })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, sort_by, order, currentPage } = this.state;
    if (
      prevState.topic !== topic ||
      prevState.sort_by !== sort_by ||
      prevState.order !== order ||
      prevState.currentPage !== currentPage
    ) {
      fetchArticles({ topic: topic && topic.slug, sort_by, order, p: currentPage }).then(
        ({ articles, total_count }) => {
          this.setState({ articles, articleCount: total_count });
          if (prevState.topic !== topic) this.setState({ currentPage: 1 });
        }
      );
    }
  }

  render() {
    const { articles, topic, currentPage, articleCount } = this.state;
    const { handleClick, username, path, topics } = this.props;

    return (
      <div>
        <h3>Articles</h3>
        {topic && (
          <h4>
            {topic.slug} - {topic.description}
          </h4>
        )}
        <TopicSelector topics={topics} handleSelectTopic={this.handleSelectTopic} path={path} />
        <br />
        <SortyBy handleSubmit={this.handleSubmit} />
        <ArticleList
          articles={articles}
          handleClick={handleClick}
          username={username}
          handleRemoveItem={this.handleRemoveItem}
          page={currentPage}
          articleCount={articleCount}
          handlePageClick={this.handlePageClick}
        />
      </div>
    );
  }
  handleSelectTopic = event => {
    const { topics } = this.props;
    const slug = event.target.value;
    const topic = topics.find(topic => topic.slug === slug);
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
    deleteArticleOrComment(articleToRemoveId, path)
      .then(status => {
        if (status === 204)
          this.setState(({ articles }) => {
            return {
              articles: articles.filter(article => article.article_id !== articleToRemoveId)
            };
          });
      })
      .catch(({ response }) =>
        navigate("/error", {
          state: {
            code: response.status,
            message: response.data,
            fromPath: path
          }
        })
      );
  };
  handlePageClick = event => {
    const pageDirection = event;
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + pageDirection });
  };
}

export default Articles;
