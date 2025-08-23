import SearchForm from '../molecules/SearchForm';
import Filter from '../molecules/Filter';
import { useEffect, useState } from 'react';
import type { IFilterValues } from '@type/ui/Filter';
import { useTodosContext } from '../../context/TodosContext';

export default function TodosHeader() {
  const todos = useTodosContext();
  const [status, setStatus] = useState<IFilterValues>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (status.length || search.length) {
      todos.setFilters({ status, search });
    }
  }, [status, search]);
  return (
    <div className='flex gap-3 items-center relative'>
      <SearchForm value={search} onChange={setSearch} />
      <div className='h-5 bg-gray-200 w-[1px]'></div>
      <Filter value={status} onChange={setStatus} />
    </div>
  );
}
