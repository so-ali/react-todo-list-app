import type { InputHTMLAttributes } from 'react';
import type { IInputProps } from '../../types/ui/Input';
import { cx } from '../../utils/helpers';

export default function Input({
  ...props
}: IInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cx(
        'h-auto px-3 py-2 rounded-2xl transition-all border border-gray-200 hover:border-gray-300 focus:outline-0 focus:border-green-600',
        props.className
      )}
    />
  );
}
