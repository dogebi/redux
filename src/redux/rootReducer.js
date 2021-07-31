import { combineReducers } from "redux";
import commentsReducer from "./comments/reducer";
import subscriberReducer from "./subscribers/reducer";
import viewReducer from "./views/reducer";

const rootReducer = combineReducers({
  views: viewReducer,
  subscribers: subscriberReducer,
  comments: commentsReducer,
});

export default rootReducer;
