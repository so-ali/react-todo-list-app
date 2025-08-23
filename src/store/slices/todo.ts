import { createSlice } from '@reduxjs/toolkit';
import type { ITodoItem, ITodoSliceState } from '@type/logic/TodoSlice';

const initialState = {
  status: 'idle',
  todos: [],
} satisfies ITodoSliceState as ITodoSliceState;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setState: (state, { payload }: { payload: ITodoSliceState }) => ({
      ...state,
      ...payload,
    }),
    addTodo: (state, { payload }: { payload: ITodoItem }) => ({
      ...state,
      todos: [payload, ...state.todos],
    }),
    removeTodo: (state, { payload }: { payload: number }) => ({
      ...state,
      todos: state.todos.filter((item) => item.id !== payload),
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
