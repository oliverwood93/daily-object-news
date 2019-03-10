import React from "react";
import moment from "moment";

export default function DatePosted({createdAt}) {
  return <p> {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>;
}
