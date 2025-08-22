import type { ButtonHTMLAttributes } from 'react';
import type { IButtonProps } from '../../types/ui/Button';
import { cx } from '../../utils/helpers';
import Loading from '../molecules/Loading';

export default function Button({
  children,
  style,
  size,
  loading,
  error,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps) {
  let className =
    'flex items-center gap-2 py-2 px-6 rounded-2xl cursor-pointer transition-all bg-gray-100 text-black hover:bg-gray-200';
  if (style === 'primary') {
    className += ' bg-green-600 text-white hover:bg-green-700';
  }
  if (style === 'transparent') {
    className +=
      ' px-0 py-0 bg-transparent text-black hover:bg-transparent hover:text-gray-700';
  }
  if (style === 'outlined') {
    className +=
      ' bg-transparent text-black hover:bg-transparent border border-gray-300 hover:border-gray-400';
  }

  if (size === 'small') {
    className += ' text-xs py-1 px-3';
  }

  if (error) {
    className +=
      ' bg-red-600 text-white hover:bg-red-700 animate__animated animate__shakeX';
  }

  return (
    <button {...props} className={cx(className, props.className)}>
      {loading && <Loading size={14} />}
      {!loading && <span>{children}</span>}
    </button>
  );
}
