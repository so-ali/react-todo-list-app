import type { IFilterValues } from './Filter';

export type ITodosFilters = {
  search: string;
  status: IFilterValues;
};
export type ITodosHeaderProps = {
  onFilter?: ({ search, status }: ITodosFilters) => void;
};
