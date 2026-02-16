import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes with clsx. ShadCN-style utility. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format large numbers (e.g. 1.2M, 340K) for display */
export function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

/** Format INR for display */
export function formatINR(amount: number): string {
  return `₹${(amount / 1_00_000).toFixed(1)}L`;
}

/** Format duration (minutes) as "X min" */
export function formatDuration(min: number): string {
  return `${min} min`;
}

/** Format duration in Tamil: "X நிமி" */
export function formatDurationTamil(min: number, minLabel: string): string {
  return `${min} ${minLabel}`;
}
