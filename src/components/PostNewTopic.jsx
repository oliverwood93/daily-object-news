import React, { Fragment } from "react";

export default function PostNewTopic({ handleNameChange, handleDescriptionChange }) {
  return (
    <div className="new-topic">
      <input
        className="topic-name"
        placeholder="Topic..."
        required
        onChange={handleNameChange}
        name="name"
        type="text"
      />
      <input
        required
        className="topic-description"
        placeholder="Description of Topic..."
        onChange={handleDescriptionChange}
        name="description"
        type="text"
      />
    </div>
  );
}
