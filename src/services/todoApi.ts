import type { ITodoItem } from '../types/logic/TodoSlice';

export const getTodos = async (
  limit: number,
  offset: number
): Promise<ITodoItem[]> => {
  const searchParams = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  });
  try {
    const response = await await fetch(
      `https://dummyjson.com/todos?${searchParams.toString()}`
    ).then((r) => r.json());

    if (
      typeof response === 'object' &&
      response &&
      Array.isArray(response?.todos)
    ) {
      return response?.todos.map((item: ITodoItem | {}) => item as ITodoItem);
    }
  } catch (e) {
    console.error(e);
  }

  return [];
};

export const addTodo = async (todo: string) => {
  return await fetch('https://dummyjson.com/todos/add', {
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
  return await fetch(`https://dummyjson.com/todos/${todoID}`, {
    method: 'DELETE',
  }).then((r) => r.json());
};

export const updateTodo = async (todo: ITodoItem) => {
  return await fetch(`https://dummyjson.com/todos/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: todo.completed,
    }),
  });
};
