import React, { Component } from "react";
import { fetchArticles, deleteArticleOrComment } from "../../utils/api-requests";
import TopicSelector from "../TopicSelector";
import ArticleList from "../ArticleList";
import SortyBy from "../SortyBy";
import { navigate } from "@reach/router";
import "./Articles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
        <Card className="articles-header-container">
          <Card.Header>
            <h2 className="articles-header">Articles</h2>
          </Card.Header>
          <Card.Title>
            {topic ? (
              <p className="articles-topic-subheader">
                {topic.slug} - {topic.description}
              </p>
            ) : (
              <p className="articles-topic-subheader">All Articles</p>
            )}
          </Card.Title>
          <form onSubmit={this.handleSubmit} className="articles-filter-container">
            <TopicSelector className="topic-selector" topics={topics} handleSelectTopic={this.handleSelectTopic} path={path} />
            <SortyBy />
            <Button size="sm" id="sort-button" type="submit">
              Apply
            </Button>
          </form>
        </Card>
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
    const sort_by = document.getElementById("sort-by").value;
    const order = document.getElementById("order").value;
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
