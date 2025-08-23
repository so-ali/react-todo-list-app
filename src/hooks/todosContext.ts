import { useContext } from 'react';
import { TodosContext } from 'src/context/TodosContext';

export const useTodosContext = () => {
  const ctx = useContext(TodosContext);
  if (!ctx) {
    throw new Error(
      'useTodosContext must be used within a TodosContextProvider'
    );
  }

  return ctx;
};
