export type ITodoSliceState = {
  status: 'idle' | 'loading' | 'ready' | 'failed';
  todos: ITodoItem[];
};
export type ITodoItem = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};
