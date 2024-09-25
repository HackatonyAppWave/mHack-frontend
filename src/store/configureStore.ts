import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { footerMenuReducer } from "../reducers/footerMenu";
import { chatReducer } from "../reducers/chat";
import { chatDataReducer } from "../reducers/chatData";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    footerMenu: footerMenuReducer,
    chat: chatReducer,
    chatData: chatDataReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
