import { combineReducers } from "redux";
import { lottoNumberReducers } from "../reducers/lottoNumbers";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const rootReducer = combineReducers({
  numbers: lottoNumberReducers
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;