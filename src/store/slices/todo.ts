import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "@/tools/localStorage";
import { createSlice } from "@reduxjs/toolkit";

const todoItem = getLocalStorage("todos_V1") as string

const initialState: Todos = {
  todos: getLocalStorage("todos_V1") as string ? JSON.parse(getLocalStorage("todos_V1") as string) : []
};

export const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newtTask = {
        task: action.payload,
        completed: false,
      };
      state.todos.push(newtTask);
      setLocalStorage("todo_v1", action.payload);
    },

    completeTodo: (state, action) => {
      const taskIndex = state.todos.findIndex(
        (todo) => todo.task === action.payload
      );
      state.todos[taskIndex].completed = true;
      setLocalStorage("todo_v1", JSON.stringify(state.todos));
    },

    deleteTodo: (state, action) => {
      const taskIndex = state.todos.findIndex(
        (todo) => todo.task === action.payload
      );
      state.todos.splice(taskIndex, 1);
      removeLocalStorage("todo_v1");
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = TodosSlice.actions;
