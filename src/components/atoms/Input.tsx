import { forwardRef, type InputHTMLAttributes } from 'react';
import type { IInputProps } from '../../types/ui/Input';
import { cx } from '../../utils/helpers';

function InputComponent(
  { error, ...props }: IInputProps & InputHTMLAttributes<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={cx([
        'flex-1 h-auto px-3 py-2 rounded-2xl transition-all border border-gray-200 hover:border-gray-300 focus:outline-0 focus:border-green-600',
        error && 'border-red-600 focus:border-red-600',
        props.className,
      ])}
      ref={ref}
    />
  );
}
const Input = forwardRef<
  HTMLInputElement,
  IInputProps & InputHTMLAttributes<HTMLInputElement>
>((props, ref) => InputComponent(props, ref));
export default Input;
