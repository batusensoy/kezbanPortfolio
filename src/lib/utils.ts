import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createMailtoLink({
  email,
  subject,
  body,
}: {
  email: string;
  subject: string;
  body: string;
}) {
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${email}?${params.toString()}`;
}

