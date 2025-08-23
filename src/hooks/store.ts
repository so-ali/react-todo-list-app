import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import type { ITodoSliceState } from '@type/logic/TodoSlice';

export const useTodosStore = () =>
  useSelector<RootState, ITodoSliceState>((selector) => selector.todos);
