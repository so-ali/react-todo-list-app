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
  const parsedResponse = await response.json();

  if (
    typeof parsedResponse === 'object' &&
    parsedResponse &&
    Array.isArray(parsedResponse?.todos)
  ) {
    return parsedResponse?.todos.map((item: ITodoItem) => item as ITodoItem);
  }

  return [];
};

export const addTodo = async (todo: string) => {
  return await fetch(`${API_BASE}/todos/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: todo,
      completed: false,
      userId: Math.round(Math.random() * 100), // Generate random user id.
    }),
  }).then((r) => r.json());
};

export const deleteTodo = async (todoID: number) => {
  return await fetch(`${API_BASE}/todos/${todoID}`, {
    method: 'DELETE',
  }).then((r) => r.json());
};

export const updateTodo = async (todo: ITodoItem) => {
  return await fetch(`${API_BASE}/todos/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: todo.completed,
    }),
  });
};
