import type { ITodoItem } from "@type/logic/TodoSlice";

export interface ITodoItemProps {
  todo: ITodoItem;
  onToggle: (item: ITodoItem) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  sortable?: boolean;
}
