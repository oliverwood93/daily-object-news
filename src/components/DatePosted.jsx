import React from "react";
import moment from "moment";

export default function DatePosted({createdAt}) {
  return <p> Posted: {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>;
}
