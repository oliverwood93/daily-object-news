import React from "react";

export default function SortyBy({ handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <select id="sort-by" name="sort-by" defaultValue="Sort By" label="sort_by">
          <option disabled>
            Sort By
          </option>
          <option value="created_at">Date Posted</option>
          <option value="comment_count">Number of Comments</option>
          <option value="votes">Number of Votes</option>
        </select>
        <select id="order" name="order" defaultValue="Order">
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
