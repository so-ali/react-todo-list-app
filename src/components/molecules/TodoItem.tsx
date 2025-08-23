import { Check, Menu, X } from 'lucide-react';
import Button from '../atoms/Button';
import { cx } from '../../utils/helpers';
import type { ITodoItemProps } from '../../types/ui/TodoItem';
import { useState } from 'react';
import type { ITodoItem } from '../../types/logic/TodoSlice';
import Loading from './Loading';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Swal from 'sweetalert2';

export default function TodoItem({
  todo,
  onDelete,
  onToggle,
  sortable,
}: ITodoItemProps) {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [toggleLoading, setToggleLoading] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: todo.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDelete = async (id: number) => {
    const response = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
    });
    if (response.isConfirmed) {
      setDeleteLoading(true);
      await onDelete(id);
      setDeleteLoading(false);
    }
  };
  const handleToggle = async (item: ITodoItem) => {
    setToggleLoading(true);
    await onToggle(item);
    setToggleLoading(false);
  };
  return (
    <div style={style} className='group' {...attributes} ref={setNodeRef}>
      <div
        className={cx([
          'flex justify-between gap-3 border-b border-gray-200 pb-3 last:border-0 group relative transition-all',
          sortable && 'hover:pl-6',
        ])}
      >
        <div
          className='flex gap-2 items-center cursor-pointer '
          onClick={() => handleToggle({ ...todo, completed: !todo.completed })}
        >
          {sortable && (
            <span
              {...listeners}
              className='absolute transition-all opacity-0 left-0 group-hover:opacity-100'
            >
              <Menu size={16} className='text-gray-300 hover:text-gray-500' />
            </span>
          )}
          <span
            className={cx([
              'w-5 min-w-5 h-5 min-h-5 rounded-2xl transition-all bg-green-200 flex justify-center items-center',
              !todo.completed && 'bg-gray-100 group-hover:bg-gray-200',
            ])}
          >
            {!toggleLoading && todo.completed && <Check color='green' />}
            {toggleLoading && <Loading size={14} />}
          </span>
          <span className={cx(['text-sm', todo.completed && 'line-through'])}>
            {todo.todo}
          </span>
        </div>
        <Button
          variant='transparent'
          title='Remove'
          onClick={() => handleDelete(todo.id)}
          loading={deleteLoading}
        >
          <X size={16} />
        </Button>
      </div>
    </div>
  );
}
