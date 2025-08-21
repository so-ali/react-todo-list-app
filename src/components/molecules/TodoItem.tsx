import { Check, X } from 'lucide-react';
import type { ITodoItem } from '../../types/logic/TodoSlice';
import Button from '../atoms/Button';
import { cx } from '../../utils/helpers';

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <li className='flex justify-between gap-3 border-b border-gray-200 pb-3 last:border-0'>
      <div className='flex gap-2 items-center'>
        <span
          className={cx([
            'block w-5 min-w-5 h-5 min-h-5 rounded-2xl bg-green-200',
            !todo.completed && 'bg-gray-100',
          ])}
        >
          {todo.completed && <Check color='green' />}
        </span>
        <span className={cx(['text-sm', todo.completed && 'line-through'])}>
          {todo.todo}
        </span>
      </div>
      <Button style={'transparent'}>
        <X size={16} />
      </Button>
    </li>
  );
}
