import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getURL = () => {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL;
  return url ? url : `http://localhost:${process.env.PORT || 3000}`;
};
