import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import CreateUserForm from "./components/CreateUserForm";
import UsersList from "./components/UsersList";
import logo from "./logo.svg";
import "./App.css";

import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
} from "./actions/users";

function App({ getUsersRequest, items, createUserRequest, deleteUserRequest }) {
  const requestUserCallback = useCallback(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  useEffect(() => {
    requestUserCallback();
  }, [requestUserCallback]);

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: "auto" }}>
        <div className="mx-auto">
          <img src={logo} className="img-fluid  App-logo" alt="React logo" />
        </div>
      </header>

      <section style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
        <CreateUserForm createAction={createUserRequest}></CreateUserForm>
        <UsersList
          users={items}
          deleteUserAction={deleteUserRequest}
        ></UsersList>
      </section>
    </div>
  );
}

export default connect(({ users }) => users, {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
})(App);
