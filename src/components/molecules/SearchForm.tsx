import { ChevronLeft, Search } from 'lucide-react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useRef, useState } from 'react';
import { cx } from '../../utils/helpers';
import type { ISearchFormProps } from '@type/ui/SearchForm';

export default function SearchForm({ value, onChange }: ISearchFormProps) {
  const [display, setDisplay] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div
        className={cx([
          'absolute left-0 right-0 bg-white flex gap-3 transition-all duration-200 ',
          display
            ? 'top-[-10px] pb-3'
            : 'top-[-30px] p-0 invisible pointer-events-none opacity-0',
        ])}
      >
        <Button
          variant='transparent'
          onClick={() => {
            setDisplay(false);
            onChange('');
          }}
        >
          <ChevronLeft />
        </Button>
        <Input
          className='flex-1'
          placeholder='Type to search...'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoFocus={display}
          ref={inputRef}
        />
      </div>
      <Button
        onClick={() => {
          setDisplay(true);
          setTimeout(() => inputRef.current?.focus(), 300);
        }}
        variant='transparent'
      >
        <Search />
      </Button>
    </div>
  );
}
