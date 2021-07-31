//store

import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import subscriberReducer from "./subscribers/reducer";
import thunk from "redux-thunk"; //순차적으로 호출할수 있게하는 thunk

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
