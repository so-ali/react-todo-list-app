import type { ButtonHTMLAttributes } from 'react';
import type { IButtonProps, IButtonVariants } from '../../types/ui/Button';
import { cx } from '../../utils/helpers';
import Loading from '../molecules/Loading';

export default function Button({
  children,
  variant = 'normal',
  size,
  loading,
  error,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps) {
  const buttonVariants: Record<IButtonVariants, string> = {
    normal: '',
    primary: 'bg-green-600 text-white hover:bg-green-700',
    transparent:
      'px-0 py-0 bg-transparent text-black hover:bg-transparent hover:text-gray-700',
    outlined:
      'bg-transparent text-black hover:bg-transparent border border-gray-300 hover:border-gray-400',
  };

  const className = cx([
    'flex items-center gap-2 py-2 px-6 rounded-2xl cursor-pointer transition-all bg-gray-100 text-black hover:bg-gray-200',
    props.className,
    buttonVariants[variant] ?? null,
    error &&
      'bg-red-600 text-white hover:bg-red-700 animate__animated animate__shakeX',
    size === 'small' && 'text-xs py-1 px-3',
  ]);

  return (
    <button {...props} className={className}>
      {loading && <Loading size={14} />}
      {!loading && <span>{children}</span>}
    </button>
  );
}
