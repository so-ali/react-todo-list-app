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
    queryKey: ['todos-list', limit, offset],
    queryFn: () => getTodos(limit, offset),
  });

  const addItem = useMutation({
    mutationFn: (todo: string) => addTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos-list'] });
    },
  });

  const removeItem = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos-list'] });
    },
  });

  const updateItem = useMutation({
    mutationFn: (updatedTodo: ITodoItem) => updateTodo(updatedTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos-list'] });
    },
  });

  return { getList, addItem, removeItem, updateItem };
};
