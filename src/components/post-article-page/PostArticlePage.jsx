import React, { Component } from "react";
import { navigate } from "@reach/router";
import TopicSelector from "../TopicSelector";
import PostNewTopic from "../PostNewTopic";
import { postTopic, postArticle } from "../../utils/api-requests";
import "./PostArticlePage.css"

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
        <div className="create-account-form">
          <form onSubmit={this.handleSubmit}>
            Title:{" "}
            <input className="title-input" onChange={this.handleTitleChange} name="title-input" type="text" required />
            <br />
            <TopicSelector className="topic-selector" topics={topics} path={path} handleSelectTopic={this.handleSelectTopic} />
            {topic === "newTopic" && (
              <PostNewTopic className="post-topic-form"
                handleNameChange={this.handleTopicNameChange}
                handleDescriptionChange={this.handleTopicDescriptionChange}
              />
            )}
            <textarea className="article-body"
              required
              onChange={this.handleBodyChange}
              name="article-body"
              rows="30"
              cols="65"
              placeholder="Please Write Article Here..."
            />
            <button type="submit">Post Article</button>
          </form>
        </div>
      );
  }
  handleSelectTopic = event => {
    const topic = event.target.value;
    this.setState({ topic });
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
    event.preventDefault();
    const { username } = this.props.loggedInUser;
    const { slug, description, topic, title, body } = this.state;
    let postingNewArticlePromise = null;
    if (topic === "newTopic") {
      postingNewArticlePromise = postTopic({ slug, description })
        .then(topic => postArticle({ title, body, topic, author: username }))
        .catch(err => console.dir(err));
    } else postingNewArticlePromise = postArticle({ title, body, topic, author: username });
    postingNewArticlePromise.then(id => navigate(`/articles/${id}`));
  };
}
