export interface ITodoSliceState {
  status: "idle" | "loading" | "ready" | "failed";
  todos: ITodoItem[];
}
export interface ITodoItem {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
