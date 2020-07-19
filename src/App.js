import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import { getUsersRequest } from "./actions/users";

function App({ getUsersRequest }) {
  const requestUserCallback = useCallback(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  useEffect(() => {
    requestUserCallback();
  }, [requestUserCallback]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default connect(null, {
  getUsersRequest,
})(App);
