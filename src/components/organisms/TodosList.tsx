import { useEffect, useState } from 'react';
import { useTodosContext } from '../../context/TodosContext';
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
    setEnabledSort(
      todosContext.filters?.status === 'all' &&
        todosContext.filters?.search === ''
    );
  }, [todosContext.filters]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = todosContext.todos.indexOf(
        todosContext.todos.find((item) => item.id === active.id)!
      );
      const newIndex = todosContext.todos.indexOf(
        todosContext.todos.find((item) => item.id === over.id)!
      );
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
        </SortableContext>
      </DndContext>
    </div>
  );
}
