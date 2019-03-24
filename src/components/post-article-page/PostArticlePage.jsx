import React, { Component } from "react";
import { navigate } from "@reach/router";
import TopicSelector from "../TopicSelector";
import PostNewTopic from "../PostNewTopic";
import { postUserTopicOrArticle } from "../../utils/api-requests";
import "./PostArticlePage.css";
import { Card, InputGroup, FormControl, Button, Form } from "react-bootstrap";

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
              handleSelectTopic={this.handleSelectTopic}
            />
          </Card.Header>
          <form onSubmit={this.handleSubmit}>
            {" "}
            <div className="title-topic-container">
              <FormControl
                autoComplete="off"
                className="title"
                onChange={this.handleTitleChange}
                name="title-input"
                type="text"
                required
                placeholder="Title..."
              />

              {topic === "newTopic" && (
                <PostNewTopic
                  className="post-topic-form"
                  handleNameChange={this.handleTopicNameChange}
                  handleDescriptionChange={this.handleTopicDescriptionChange}
                />
              )}
            </div>
            <textarea
              className="article-body"
              required
              onChange={this.handleBodyChange}
              required
              placeholder="Please Write Article Here..."
            />
            <Button className="post-button" type="submit">
              Post Article
            </Button>
          </form>
        </Card>
      );
  }

  handleSelectTopic = event => {
    const topic = event.target.value;
    this.setState({ topic });
    return topic;
  };
  handleTitleChange = event => {
    const title = event.target.value;
    this.setState({ title });
  };
  handleBodyChange = event => {
    const body = event.target.value;
    this.setState({ body });
  };
  handleTopicNameChange = event => {
    const slug = event.target.value;
    this.setState({ slug });
  };
  handleTopicDescriptionChange = event => {
    const description = event.target.value;
    this.setState({ description });
  };
  handleSubmit = event => {
    console.log(this.state);
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
