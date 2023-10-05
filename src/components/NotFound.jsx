import React from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <div></div>
            <h1>404</h1>
          </div>
          <h2>Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <NavLink to="/">back to home page</NavLink>
        </div>
      </div>
    </div>
  );
}
