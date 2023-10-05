import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useFetch from "../hooks/useFetch";

export default function Users() {
  let [users, isLoading, errors] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      <div className="bg-light p-5 text-center">
        <div className="container">
          <h2>Users List</h2>
          {isLoading && <Spinner></Spinner>}
          {!isLoading &&
            !errors &&
            users.map((user) => {
              return (
                <p className="m-5 text-center" key={user.id}>
                  {user.name}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}
