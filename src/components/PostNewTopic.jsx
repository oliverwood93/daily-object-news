import React from "react";
import FormControl from "react-bootstrap/FormControl";

export default function PostNewTopic({ handleInput }) {
  return (
    <div className="new-topic">
      <FormControl
        autoComplete="off"
        className="topic-name"
        placeholder="Topic..."
        required
        onChange={handleInput}
        name="slug"
        type="text"
      />
      <FormControl
        required
        autoComplete="off"
        className="topic-description"
        placeholder="Description of Topic..."
        onChange={handleInput}
        name="description"
        type="text"
      />
    </div>
  );
}
