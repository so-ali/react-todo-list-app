import { Loader2 } from 'lucide-react';
import type { ILoadingProps } from './Loading.types';

export default function Loading({ placeholder, size }: ILoadingProps) {
  return (
    <div className='flex gap-3 align-middle justify-center'>
      <span className='animate-spin'>
        <Loader2 size={size} />
      </span>
      {placeholder}
    </div>
  );
}
