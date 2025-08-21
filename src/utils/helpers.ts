import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cx = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
