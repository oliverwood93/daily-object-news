import React from "react";

export default function SortyBy({ handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select defaultValue="Sort By" label="sort_by">
          <option disabled>
            Sort By
          </option>
          <option value="created_at">Date Posted</option>
          <option value="comment_count">Number of Comments</option>
          <option value="votes">Number of Votes</option>
        </select>
        <select defaultValue="Order">
          <option disabled>
            Order
          </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}
