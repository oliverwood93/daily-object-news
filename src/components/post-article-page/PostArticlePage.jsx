import React, { Component } from "react";
import { navigate } from "@reach/router";
import TopicSelector from "../TopicSelector";
import PostNewTopic from "../PostNewTopic";
import { postUserTopicOrArticle } from "../../utils/api-requests";
import "./PostArticlePage.css";
import Card from "react-bootstrap/Card";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class PostArticlePage extends Component {
  state = {
    title: null,
    body: null,
    topic: null,
    slug: null,
    description: null,
    isError: false
  };
  render() {
    const { loggedInUser, topics, path } = this.props;
    const { topic } = this.state;
    if (!loggedInUser) {
      return (
        <div>
          <p>You must sign-in before you can post an article.</p>
        </div>
      );
    } else
      return (
        <Card className="create-article-form">
          <Card.Header className="post-header">
            <p className="header">Have your say!</p>{" "}
            <TopicSelector
              className="topic-selector"
              topics={topics}
              path={path}
              handleSelectTopic={this.handleInput}
            />
          </Card.Header>
          <form onSubmit={this.handleSubmit}>
            <div className="title-topic-container">
              <FormControl
                autoComplete="off"
                className="title"
                onChange={this.handleInput}
                name="title"
                type="text"
                required
                placeholder="Title..."
              />

              {topic === "newTopic" && (
                <PostNewTopic className="post-topic-form" handleInput={this.handleInput} />
              )}
            </div>
            <textarea
              className="article-body"
              required
              onChange={this.handleInput}
              required
              name="body"
              placeholder="Please Write Article Here..."
            />
            <Button className="post-button" type="submit">
              Post Article
            </Button>
          </form>
        </Card>
      );
  }

  handleInput = event => {
    const { value } = event.target;
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const username = this.props.loggedInUser;
    const { slug, description, topic, title, body } = this.state;
    let newArticlePromise = null;
    if (topic === "newTopic") {
      newArticlePromise = postUserTopicOrArticle("topics", { slug, description }).then(
        ({ topic: { slug } }) =>
          postUserTopicOrArticle("articles", { title, body, topic: slug, author: username })
      );
    } else
      newArticlePromise = postUserTopicOrArticle("articles", {
        title,
        body,
        topic,
        author: username
      });
    newArticlePromise.then(({ article: { article_id } }) => navigate(`/articles/${article_id}`));
  };
}
