export const FilterEnum = ["all", "completed", "pending"] as const;
export type IFilterValues = (typeof FilterEnum)[number];
export interface IFilterProps {
  value: IFilterValues;
  onChange: (value: IFilterValues) => void;
  disabled?: boolean;
}

export interface ITodosFilters {
  search: string;
  status: IFilterValues;
}
