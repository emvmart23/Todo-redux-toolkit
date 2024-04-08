import { configureStore } from "@reduxjs/toolkit";
import { TodosSlice } from "./slices/todo";

export const store = () => {
  return configureStore({
    reducer: {
      todos: TodosSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
