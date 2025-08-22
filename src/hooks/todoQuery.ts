import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../services/todoApi';
import type { ITodoItem } from '../types/logic/TodoSlice';

export const useTodoQuery = ({
  limit = 30,
  offset = 0,
}: {
  limit: number;
  offset: number;
}) => {
  const queryClient = useQueryClient();
  const getList = useQuery({
    queryKey: ['todos', limit, offset],
    queryFn: () => getTodos(limit, offset),
  });

  const addItem = useMutation({
    mutationFn: (todo: string) => addTodo(todo),
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData(['todos']);
      queryClient.setQueryData(['todos'], (oldTodos: ITodoItem[]) => [
        {
          id: oldTodos.length + 1,
          todo: newTodo,
          completed: false,
          userId: 0,
        },
        ...oldTodos,
      ]);

      return { previousTodos };
    },
    onError: (_er, _n, context) => {
      if (context) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const removeItem = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const updateItem = useMutation({
    mutationFn: (updatedTodo: ITodoItem) => updateTodo(updatedTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return { getList, addItem, removeItem, updateItem };
};
