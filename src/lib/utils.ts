import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge conditional class names and dedupe conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Deployment base path (empty for the user site, set in the deploy workflow). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Prefix a public-folder asset with the base path. Next prefixes routes and
 * <Image> automatically, but plain <a href> links to /public files do not get
 * the prefix — use this for the resume PDF and similar downloads.
 */
export function asset(path: string) {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
