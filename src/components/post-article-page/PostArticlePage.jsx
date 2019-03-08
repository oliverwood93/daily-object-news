import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import TopicSelector from "../TopicSelector";
import PostNewTopic from "../PostNewTopic";
import { postTopic, postArticle } from "../../utils/api-requests";


export default class PostArticlePage extends Component {
  state = {
    title: null,
    body: null,
    topic: null,
    slug: null,
    description: null,
    isError: false,
  };
  render() {
    const { user, topics, path } = this.props;
    const { topic } = this.state;

    return (
      <div>
        {!user ? (
          <Fragment>
            <p>You must sign-in before you can post an article.</p>
          </Fragment>
        ) : (
          <Fragment>
            <form onSubmit={this.handleSubmit}>
              Title:{" "}
              <input onChange={this.handleTitleChange} name="title-input" type="text" required />
              <br />
              <TopicSelector
                topics={topics}
                path={path}
                handleSelectTopic={this.handleSelectTopic}
              />
              {topic === "newTopic" && (
                <PostNewTopic
                  handleNameChange={this.handleTopicNameChange}
                  handleDescriptionChange={this.handleTopicDescriptionChange}
                />
              )}
              <textarea
                required
                onChange={this.handleBodyChange}
                name="article-body"
                rows="30"
                cols="65"
                placeholder="Please Write Article Here..."
              />
              <button type="submit">Post Article</button>
            </form>
          </Fragment>
        )}
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
    const { user } = this.props;
    const { slug, description, topic, title, body } = this.state;
    let postingNewArticlePromise = null;
    if (topic === "newTopic") {
      postingNewArticlePromise = postTopic({ slug, description })
        .then(topic => postArticle({ title, body, topic, author: user }))
        .catch(err => console.dir(err));
    } else postingNewArticlePromise = postArticle({ title, body, topic, author: user });
    postingNewArticlePromise.then(id => navigate(`/articles/${id}`));
  };
}
