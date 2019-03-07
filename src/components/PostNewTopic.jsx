import React, { Component, Fragment } from "react";
// import {postTopic} from '../utils/api-requests'

export default class PostNewTopic extends Component {
  state = {
    // slug: null,
    // description: null,
    // topic: null,
    // errorOccurred: false,
  };
  render() {
    // const {errorOccurred} = this.state
    const { handleNameChange, handleDescriptionChange } = this.props;
    return (
      <Fragment>
        Topic Name: <input required onChange={handleNameChange} name="name" type="text" />
        Description:{" "}
        <input required onChange={handleDescriptionChange} name="description" type="text" />
        {/* {errorOccurred && <p>Topic Already Exists, Please check dropdown menu</p>} */}
      </Fragment>
    );
  }
  // handleNameChange = event => {
  //   const topicName = event.target.value;
  //   this.setState({ slug: topicName });
  // };
  // handleDescriptionChange = event => {
  //   const topicDescription = event.target.value;
  //   this.setState({ description: topicDescription });
  // };

  // handleSubmitTopic = event => {
  //   event.preventDefault();
  //   const { slug, description } = this.state;
  //   postTopic({ slug, description }).then(topic => this.setState({ topic })).catch(err => this.setState({errorOccurred: true}));
  // };
}
