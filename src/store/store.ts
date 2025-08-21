import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from './slices/todo';

export const appStore = configureStore({
  reducer: {
    todos: TodosReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
