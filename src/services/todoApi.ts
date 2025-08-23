import type { ITodoItem } from '@type/logic/TodoSlice';
const API_BASE = 'https://dummyjson.com';

export const getTodos = async (
  limit: number,
  offset: number
): Promise<ITodoItem[]> => {
  const searchParams = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  });

  const response = await fetch(`${API_BASE}/todos?${searchParams.toString()}`);
  const parsedResponse: { todos: ITodoItem[] } = (await response.json()) as {
    todos: ITodoItem[];
  };

  return parsedResponse.todos;
};

export const addTodo = async (todo: string) => {
  return (await fetch(`${API_BASE}/todos/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: todo,
      completed: false,
      userId: Math.round(Math.random() * 100), // Generate random user id.
    }),
  }).then((r) => r.json())) as ITodoItem & {
    isDeleted: boolean;
    deletedOn: string;
  };
};

export const deleteTodo = async (todoID: number) => {
  return (await fetch(`${API_BASE}/todos/${todoID.toString()}`, {
    method: 'DELETE',
  }).then((r) => r.json())) as ITodoItem;
};

export const updateTodo = async (todo: ITodoItem) => {
  return await fetch(`${API_BASE}/todos/${todo.id.toString()}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: todo.completed,
    }),
  });
};
