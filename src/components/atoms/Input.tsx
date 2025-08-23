import { forwardRef, type InputHTMLAttributes } from "react";
import type { IInputProps } from "./Input.types";
import { cx } from "../../utils/helpers";

function InputComponent(
  { error, ...props }: IInputProps & InputHTMLAttributes<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <input
      {...props}
      className={cx([
        "flex-1 text-input",
        error && "!border-red-600 focus:!border-red-600",
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
