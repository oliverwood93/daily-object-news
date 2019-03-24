import React, { Fragment } from "react";
import { FormControl } from "react-bootstrap";

export default function PostNewTopic({ handleNameChange, handleDescriptionChange }) {
  return (
    <div className="new-topic">
      <FormControl
        autoComplete="off"
        className="topic-name"
        placeholder="Topic..."
        required
        onChange={handleNameChange}
        name="name"
        type="text"
      />
      <FormControl
        required
        autoComplete="off"
        className="topic-description"
        placeholder="Description of Topic..."
        onChange={handleDescriptionChange}
        name="description"
        type="text"
      />
    </div>
  );
}
