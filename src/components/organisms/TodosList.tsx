import { useTodoQuery } from '../../hooks/todoQuery';
import TodoItem from '../molecules/TodoItem';

export default function TodosList() {
  const { getList } = useTodoQuery({ limit: 10, offset: 0 });
  return (
    <ul className='h-full overflow-auto gap-3 flex flex-col list-none'>
      {getList.data
        ?.sort((a, b) => (a.completed ? 0 : -1))
        .map((item) => (
          <TodoItem todo={item} />
        ))}
    </ul>
  );
}
