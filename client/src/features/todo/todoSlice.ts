import { Todo } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { todoApi } from "../../app/services/todo";
import { RootState } from "../../app/store";

interface InitialState {
  todo: Todo[] | null;
}

const initialState: InitialState = {
  todo: null,
};

const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      todoApi.endpoints.getAllMyTodo.matchFulfilled,
      (state, action) => {
        state.todo = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const selectTodo = (state: RootState) => state.todo.todo;
