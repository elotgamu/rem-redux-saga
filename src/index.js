import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

//redux saga
import createSagaMiddleware from "redux-saga";

//reducers
import reducers from "./reducers";
import rootSaga from "./sagas";

import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api";

//compose enhacer for the redux tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//create the store
const store = createStore(
  reducers, //state
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // dev tools
  // applyMiddleware(sagaMiddleware)
  composeEnhancers(applyMiddleware(sagaMiddleware)) //redux dev tools + redux saga middleware
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
