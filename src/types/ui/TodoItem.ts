import type { ITodoItem } from '../logic/TodoSlice';

export type ITodoItemProps = {
  todo: ITodoItem;
  onToggle: (item: ITodoItem) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  sortable?: boolean;
};
