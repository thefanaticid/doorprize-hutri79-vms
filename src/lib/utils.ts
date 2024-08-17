import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function generateRandomNumber(min: number = 100, max: number = 999): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}