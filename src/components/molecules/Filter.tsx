import Button from '../atoms/Button';
import { type IFilterProps, FilterEnum } from '../../types/ui/Filter';

export default function Filter({ value, onChange, disabled }: IFilterProps) {
  return (
    <div className='flex flex-row gap-2 overflow-auto'>
      {FilterEnum.map((item) => (
        <Button
          style={item === value ? 'primary' : 'normal'}
          size='small'
          key={item}
          onClick={() => !disabled && onChange(item)}
        >
          {item.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
