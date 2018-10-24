import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "../reducers/auth";
import settingsReducer from "../reducers/settings";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store creation
    const store = createStore(
      combineReducers({
        auth: authReducer, // Add more reducers here.
        settings: settingsReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};