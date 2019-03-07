import React, { Fragment } from "react";

function TopicSelector({ topics, handleSelect, path }) {
  return (
    <select
      defaultValue={path === "/articles" ? "Filter Articles By Topic" : "Please Select a Topic"}
      onChange={handleSelect}
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
      {topics.map(({ slug }) => (
        <option key={slug} value={slug}>
          {slug}
        </option>
      ))}
    </select>
  );
}

export default TopicSelector;
