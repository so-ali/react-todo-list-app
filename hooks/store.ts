import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { ITodoSliceState } from '../types/TodoSlice';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useTodosStore = useAppSelector<RootState, ITodoSliceState>(
  (selector) => selector.todos
);
