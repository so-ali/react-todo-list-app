export const FilterEnum = ['all', 'completed', 'pending'] as const;
export type IFilterValues = (typeof FilterEnum)[number];
export type IFilterProps = {
  value: IFilterValues;
  onChange: (value: IFilterValues) => void;
  disabled?: boolean;
};
