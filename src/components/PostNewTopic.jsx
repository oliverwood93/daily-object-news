import React, { Fragment } from "react";

export default function PostNewTopic({ handleNameChange, handleDescriptionChange }) {
  return (
    <Fragment>
      Topic Name: <input required onChange={handleNameChange} name="name" type="text" />
      Description:{" "}
      <input required onChange={handleDescriptionChange} name="description" type="text" />
    </Fragment>
  );
}
