import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import type { ITodoSliceState } from '../types/logic/TodoSlice';

export const useTodosStore = () =>
  useSelector<RootState, ITodoSliceState>((selector) => selector.todos);
