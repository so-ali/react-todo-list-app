import { useState } from 'react';
import { useTodoController } from 'src/hooks/todoController';
import { TodosContext } from '../TodosContext';

const TodosContextProvider: React.FC<{
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

export { TodosContextProvider as default };
