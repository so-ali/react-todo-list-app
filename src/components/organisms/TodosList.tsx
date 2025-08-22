import type { ITodosListProps } from '../../types/ui/TodosList';
import TodoItem from '../molecules/TodoItem';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

export default function TodosList({
  list,
  onToggle,
  onDelete,
  onSort,
  enabledSort,
}: ITodosListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = list.indexOf(
        list.find((item) => item.id === active.id)!
      );
      const newIndex = list.indexOf(list.find((item) => item.id === over.id)!);
      onSort({ oldIndex, newIndex });
    }
  }
  return (
    <div className='h-full overflow-auto pr-3'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={list}
          strategy={verticalListSortingStrategy}
          disabled={!enabledSort}
        >
          {list.map((item, index) => (
            <TodoItem
              todo={item}
              onDelete={onDelete}
              onToggle={onToggle}
              key={index}
              sortable={enabledSort}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
