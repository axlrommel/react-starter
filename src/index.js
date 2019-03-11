import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import App from "./components/App";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import stationInfo from "./reducers/stationInfo";

const defaultState = {
  stationInfo: []
};

const store = createStore(
  combineReducers({
    stationInfo
  }),
  defaultState,
  applyMiddleware(ReduxThunk, logger)
);

render(<App store={store} />, document.getElementById("root"));
