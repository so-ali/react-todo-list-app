import { createContext, useContext, useState } from 'react';
import { useTodoController } from '../hooks/todoController';
import React from 'react';
import type { ITodosContextType } from '../types/logic/TodosContext';

const TodosContext = createContext<ITodosContextType | null>(null);

export const TodosContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [limit, setLimit] = useState(30);
  const [offset, setOffset] = useState(0);
  const todoController = useTodoController({ limit, offset });

  return (
    <TodosContext.Provider value={{ ...todoController, setLimit, setOffset }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => {
  const ctx = useContext(TodosContext);
  if (!ctx) {
    throw new Error(
      'useTodosContext must be used within a TodosContextProvider'
    );
  }

  return ctx;
};
