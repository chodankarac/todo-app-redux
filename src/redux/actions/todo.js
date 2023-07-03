import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types";

export const addTodo = (todo) => ({
  type: ADD_TODO, //action_type
  payload: todo, //data
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = (todo, id) => ({
  type: UPDATE_TODO,
  payload: { todo: todo, todoId: id },
});
