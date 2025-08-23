import { useEffect, useState } from 'react';
import { useTodosContext } from '../../hooks/todosContext';
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
import { WarningMessage } from '@components/molecules';

export default function TodosList() {
  const [enabledSort, setEnabledSort] = useState(false);
  const todosContext = useTodosContext();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    if (todosContext.filters) {
      setEnabledSort(
        todosContext.filters.status === 'all' &&
          todosContext.filters.search === ''
      );
    }
  }, [todosContext.filters]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const findActiveObject = todosContext.todos.find(
        (item) => item.id === active.id
      );
      const findNewObject = todosContext.todos.find(
        (item) => item.id === over.id
      );

      if (!findActiveObject || !findNewObject) {
        return;
      }

      const oldIndex = todosContext.todos.indexOf(findActiveObject);
      const newIndex = todosContext.todos.indexOf(findNewObject);
      todosContext.sort({ oldIndex, newIndex });
    }
  };
  return (
    <div className='h-full overflow-auto pr-3 flex flex-col gap-2'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={todosContext.todos}
          strategy={verticalListSortingStrategy}
          disabled={!enabledSort}
        >
          {todosContext.todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              onDelete={todosContext.remove}
              onToggle={todosContext.toggle}
              sortable={enabledSort}
            />
          ))}
          {!todosContext.todos.length && (
            <WarningMessage message='No todo found...' />
          )}
        </SortableContext>
      </DndContext>
    </div>
  );
}
