import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todo-reducer";
// const { combineReducers, createStore } = require("redux");

const rootReducer = combineReducers({ todos: todoReducer });

const store = createStore(rootReducer);

export default store;
