import React, { Component, Fragment } from "react";
import TopicSelector from "../components/TopicSelector";
import PostNewTopic from "../components/PostNewTopic";

export default class PostNewArticle extends Component {
  state = {
    articleTitle: null,
    articleBody: null,
    topic: null
  };
  render() {
    const { user, topics, path } = this.props;
    const { topic } = this.state;

    return (
      <div>
        {user === "" ? (
          <Fragment>
            <p>You must sign-in before you can post an article.</p>
          </Fragment>
        ) : (
          <Fragment>
            <form>
              Title:{" "}
              <input onChange={this.handleTitleChange} name="title-input" type="text" required />
            </form>
            <br />
            <TopicSelector topics={topics} path={path} handleSelect={this.handleSelect} />
            {topic === "newTopic" && <PostNewTopic />}
              <form onSubmit={this.handleSubmit}>
              <textarea
                onChange={this.handleBodyChange}
                name="article-body"
                rows="30"
                cols="65"
                placeholder="Please Write Article Here..."
              />
              <button type="submit">
                Post Article
              </button>
            </form>
          </Fragment>
        )
        //Form for uploading an article will go below
        }
      </div>
    );
  }
  handleSelect = event => {
    const topic = event.target.value;
    this.setState({ topic });
  };
  handleTitleChange = event => {
    const articleTitle = event.target.value;
    this.setState({ articleTitle });
  };
  handleBodyChange = event => {
    const articleBody = event.target.value;
    this.setState({ articleBody });
  };
  handleSubmit = event => {
    event.preventDefault()
    console.dir(event);
    console.log(this.state);
  };
}
