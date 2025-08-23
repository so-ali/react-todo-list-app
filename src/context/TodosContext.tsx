import { createContext } from 'react';
import type { ITodosContextType } from '@type/logic/TodosContext';

export const TodosContext = createContext<ITodosContextType | null>(null);
