import React from "react";
import Button from "react-bootstrap/Button";
import paginate from "jw-paginate";

export default function Paginator({ page, itemCount, limit, handlePageClick }) {
  const { pages } = paginate(itemCount, page, limit, 3);
  return (
    <div className="paginator">
      <Button
        variant="secondary"
        className="prev-btn"
        disabled={page <= 1}
        onClick={() => handlePageClick(-1)}
      >
        Prev Page
      </Button>
      {pages.map((currPage, i) => (
        <Button
          key={`page-nums-${i}`}
          onClick={() => handlePageClick(currPage, true)}
          disabled={currPage === page ? true : false}
          variant={currPage === page ? "primary" : "secondary"}
          className={`page-nums-${i}`}
        >
          {currPage}
        </Button>
      ))}
      <Button
        variant="secondary"
        className="next-btn"
        disabled={page >= itemCount / limit}
        onClick={() => handlePageClick(1)}
      >
        Next Page
      </Button>
    </div>
  );
}
