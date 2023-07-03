import { act } from "react-dom/test-utils";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types";

const initialState = [];
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    case UPDATE_TODO:
      const updateState = state.map((todo) => {
        if (todo.id == action.payload.todoId) {
          todo.title = action.payload.todo.title;
          todo.description = action.payload.todo.description;
        }
        return todo;
      });
      return updateState;
    default:
      return state;
  }
};