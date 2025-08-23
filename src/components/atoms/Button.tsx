import type { ButtonHTMLAttributes } from 'react';
import type { IButtonProps } from '../../types/ui/Button';
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
  const className = cx([
    props.className,
    error &&
      '!bg-red-600 !text-white hover:!bg-red-700 animate__animated animate__shakeX',
    size === 'small' && 'text-xs py-1 px-3',
  ]);

  return (
    <button {...props} className={className} data-variant={variant}>
      {loading && <Loading size={14} />}
      {!loading && <span>{children}</span>}
    </button>
  );
}
