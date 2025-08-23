import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../services/todoApi";
import type { ITodoItem } from "@type/logic/TodoSlice";

export const useTodoQuery = ({
  limit = 30,
  offset = 0,
}: {
  limit: number;
  offset: number;
}) => {
  const queryKey = ["todos", limit, offset];
  const queryClient = useQueryClient();
  const getList = useQuery({
    queryKey,
    queryFn: () => getTodos(limit, offset),
  });

  const addItem = useMutation({
    mutationFn: (todo: string) => addTodo(todo),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey });
      const previousTodos = queryClient.getQueryData(queryKey);

      return { previousTodos };
    },
    onError: (_er, _n, context) => {
      if (context) {
        queryClient.setQueryData(queryKey, context.previousTodos);
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, (oldTodos: ITodoItem[]) => {
        return [data, ...oldTodos];
      });
    },
  });

  const removeItem = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    // We can use the optimistic updates like the add item but our API is a mock API.
  });

  const updateItem = useMutation({
    mutationFn: (updatedTodo: ITodoItem) => updateTodo(updatedTodo),
    // We can use the optimistic updates like the add item but our API is a mock API.
  });

  return { getList, addItem, removeItem, updateItem };
};
