import React, { Fragment } from "react";

export default function Paginator({page, itemCount, limit, handlePageClick}) {
  return (
    <Fragment>
      <button disabled={page <= 1} onClick={() => handlePageClick(-1)}>
        Prev Page
      </button>
      <button disabled={page >= itemCount / limit} onClick={() => handlePageClick(1)}>
        Next Page
      </button>
    </Fragment>
  );
}
