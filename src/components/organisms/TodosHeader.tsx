import SearchForm from '../molecules/SearchForm';
import Filter from '../molecules/Filter';
import { useEffect, useState } from 'react';
import type { IFilterValues } from '../../types/ui/Filter';
import type { ITodosHeaderProps } from '../../types/ui/TodosHeader';

export default function TodosHeader({ onFilter }: ITodosHeaderProps) {
  const [status, setStatus] = useState<IFilterValues>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (onFilter && (status.length || search.length)) {
      onFilter({ status, search });
    }
  }, [status, search, onFilter]);
  return (
    <div className='flex gap-3 items-center relative'>
      <SearchForm value={search} onChange={setSearch} />
      <div className='h-5 bg-gray-200 w-[1px]'></div>
      <Filter value={status} onChange={setStatus} />
    </div>
  );
}
