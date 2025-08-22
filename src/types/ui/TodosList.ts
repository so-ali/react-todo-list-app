import type { ITodoItem } from '../logic/TodoSlice';

export type ITodosListProps = {
  onToggle: (item: ITodoItem) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  list: ITodoItem[];
  enabledSort?: boolean;
  onSort: ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => void;
};
