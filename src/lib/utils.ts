import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}

export const setToLocalStorage = (key: string, token: string): void => {
  if (!key || typeof window === "undefined") {
    return;
  }
  localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string): string | null => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string): void => {
  if (!key || typeof window === "undefined") {
    return;
  }
  localStorage.removeItem(key);
};
