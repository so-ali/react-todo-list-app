import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cx = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export const capitalize = (str: string): string => {
  if (str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
