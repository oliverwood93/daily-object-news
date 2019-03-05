import React from "react";

function TopicSelector({ topics, handleSelect }) {
  return (
    <div>
      <select onInput={handleSelect} className="topic-selector">
        <option defaultValue disabled>Filter Articles By Topic</option>
        <option key="all" value="">All Articles</option>
        {topics.map(({ slug }) => (
          <option key={slug} value={slug}>
            {slug}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TopicSelector;
