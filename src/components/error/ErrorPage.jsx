import React from "react";
import { Link } from "@reach/router";

export default function ErrorPage({ location }) {
  const state = location.state;

  if (state) {
    const { code, fromPath, message } = state;
    return (
      <div>
        <h2>{message.ERROR}</h2>
        <h2>on Path: {fromPath}</h2>
        <h2>Status Code: {code}</h2>
        <Link to="/">
          <p>Click here to return to the Home page</p>
        </Link>
      </div>
    );
  } else if (location.pathname === '/error') {
    return (
      <div>
        <h2>There has been an error, we apologise for the inconvenience</h2>{" "}
        <Link to="/">
          <p>Click here to return to the Home page</p>
        </Link>
      </div>
    );
  }
  else return <div><h2>Status: 404</h2>
  <h2>Page Not Found!</h2>
    <Link to="/">
      <p>Click here to return to the Home page</p>
    </Link>
  </div>
}

