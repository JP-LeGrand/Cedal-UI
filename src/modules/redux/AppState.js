import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
import InitialState from "./InitialState";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export const createAppState = () =>
  createStore(
    RootReducer,
    InitialState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
