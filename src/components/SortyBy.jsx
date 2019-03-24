import React, {Fragment} from "react";

export default function SortyBy() {
  return (
    <Fragment>
      <select id="sort-by" name="sort-by" defaultValue="Sort By">
        <option disabled>Sort By</option>
        <option value="created_at">Date Posted</option>
        <option value="comment_count">Number of Comments</option>
        <option value="votes">Number of Votes</option>
      </select>
      <select id="order" name="order" defaultValue="Order">
        <option disabled>Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </Fragment>
  );
}
