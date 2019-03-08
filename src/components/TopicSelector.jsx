import React, { Fragment } from "react";

function TopicSelector({ topics, handleSelectTopic, path }) {
  return (
    <select
      defaultValue={path === "/articles" ? "Filter Articles By Topic" : "Please Select a Topic"}
      onChange={handleSelectTopic}
      className="topic-selector"
    >
      {path === "/articles" ? (
        <Fragment>
          <option disabled>Filter Articles By Topic</option>
          <option key="all" value="">
            All Articles
          </option>
        </Fragment>
      ) : (
        <Fragment>
          <option disabled>Please Select a Topic</option>
          <option key="newTopic" value="newTopic">
            Create New Topic
          </option>
        </Fragment>
      )}
      {topics.map((topic) => (
        <option key={topic.slug} value={topic.slug}>
          {topic.slug}
        </option>
      ))}
    </select>
  );
}

export default TopicSelector;
