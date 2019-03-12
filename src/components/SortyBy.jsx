import React from "react";
import { Button } from "react-bootstrap";

export default function SortyBy({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="sort-order-container">
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
      <Button size="sm" id="sort-button" type="submit">Apply</Button>
    </form>
  );
}
