import { createSlice } from '@reduxjs/toolkit';
import type { ITodoItem, ITodoSliceState } from '../../types/TodoSlice';

const initialState = {
  status: 'idle',
  todos: [],
} satisfies ITodoSliceState as ITodoSliceState;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setState: (_, { payload }: { payload: ITodoSliceState }) => payload,
    addTodo: (state, { payload }: { payload: ITodoItem }) => ({
      ...state,
      todos: state.todos.concat([payload]),
    }),
    removeTodo: (
      state,
      { payload }: { payload: ITodoItem | { id: number } }
    ) => ({
      ...state,
      todos: state.todos.filter((item) => item.id !== payload.id),
    }),
    updateTodo: (state, { payload }: { payload: ITodoItem }) => {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    },
  },
});

export const { setState, addTodo, removeTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
