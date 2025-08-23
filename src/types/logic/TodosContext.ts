import type { Dispatch, SetStateAction } from 'react';
import type { useTodoController } from '../../hooks/todoController';

export type ITodosContextType = ReturnType<typeof useTodoController> & {
  setLimit: Dispatch<SetStateAction<number>>;
  setOffset: Dispatch<SetStateAction<number>>;
};
