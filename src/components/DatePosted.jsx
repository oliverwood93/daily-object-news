import React from "react";
import moment from "moment";

export default function DatePosted({ createdAt, fullDate }) {
  return (
    <p className={fullDate ? "full-date" : "short-date"}>
      {" "}
      {moment(createdAt).format(fullDate ? "MMMM Do YYYY, h:mm:ss a" : "MMMM Do YYYY")}
    </p>
  );
}
