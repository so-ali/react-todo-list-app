import Button from '../atoms/Button';
import { type IFilterProps, FilterEnum } from './Filter.types';
import { capitalize } from '../../utils/helpers';

export default function Filter({ value, onChange, disabled }: IFilterProps) {
  return (
    <div className='flex flex-row gap-2 overflow-auto'>
      {FilterEnum.map((item) => (
        <Button
          variant={item === value ? 'primary' : 'normal'}
          size='small'
          key={item}
          onClick={() => {
            if (disabled) return;
            onChange(item);
          }}
        >
          {capitalize(item)}
        </Button>
      ))}
    </div>
  );
}
