import React from 'react';

type IconProps = {
  className?: string;
};

// Helper function to merge default classes with provided classes
const mergeClasses = (defaultClass: string, providedClass?: string) => {
  if (!providedClass) return defaultClass;
  return `${defaultClass} ${providedClass}`;
};

// Menu icon
export function Menu({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-6 w-6", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );
}

// Shield/Security icon
export function Shield({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

// Graph/Chart icon
export function Graph({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

// Money/Finance icon
export function Money({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

// Lightbulb icon
export function Lightbulb({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

// Web/Globe icon
export function Web({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

// Book/Education icon
export function Book({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

// Calendar icon
export function Calendar({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

// Lightning/Energy icon
export function Lightning({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

// Growth/Chart up icon
export function Growth({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

// Exit/Arrow right icon
export function Exit({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

// Shipping/Export icon
export function Shipping({ className }: IconProps) {
  const combinedClasses = mergeClasses("h-full w-full", className);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 122.88 112.63" stroke="currentColor" className={combinedClasses}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M35.58,24.13h3.6v-3.28v0h0.02c0-1.21,0.49-2.31,1.28-3.1l-0.01-0.01c0.78-0.78,1.87-1.27,3.09-1.27h0.01v-0.02h0h6.74 V5.84v0h0.02c0-1.61,0.66-3.07,1.71-4.12c1.05-1.05,2.5-1.69,4.1-1.7V0h0h10.2l0,0v0.02c1.61,0,3.07,0.66,4.12,1.71 c1.04,1.05,1.69,2.5,1.7,4.1h0.01v0v10.63h6.74h0v0.02c1.21,0,2.31,0.49,3.1,1.29c0.78,0.78,1.27,1.87,1.27,3.07v0.01h0.01v0v3.28 h3.6v-0.02l0,0v0.02c1.31,0,2.49,0.53,3.35,1.38l0.01-0.01c0.85,0.85,1.37,2.03,1.38,3.35h0.02v0v18.88v0h-0.02 c0,0.46-0.07,0.91-0.19,1.34l13.62,6.62L91.17,69.84v14.12c2.13-1.07,3.81-2.66,5.39-4.16c3.19-3.02,6.1-5.78,11.13-5.84 c5.66-0.06,7.49,2.86,11.39,5.86c0.63,0.49,1.28,0.99,2.15,1.62l0.1,0.07c1.67,1.21,2.05,3.55,0.83,5.22 c-1.21,1.68-3.55,2.05-5.23,0.84l-0.1-0.07c-0.65-0.47-1.49-1.12-2.32-1.76c-2.86-2.21-3.68-4.34-6.77-4.31 c-2.06,0.02-3.96,1.82-6.03,3.79c-3.91,3.71-8.26,7.83-16.81,7.44c-7.23,0.33-11.45-2.57-14.95-5.72H51.79 c-3.66,2.75-7.64,5.25-13.43,5.18c-6.62,0.08-10.88-3.2-15-6.38c-2.86-2.21-5.63-4.34-8.72-4.31c-2.06,0.02-3.96,1.82-6.03,3.79 c-0.77,0.73-1.56,1.48-2.44,2.23C4.6,88.8,2.24,88.61,0.9,87.04c-1.34-1.57-1.16-3.93,0.41-5.27c0.72-0.62,1.44-1.3,2.15-1.97 c3.19-3.02,6.1-5.78,11.13-5.84c5.66-0.06,9.44,2.86,13.34,5.86c1.76,1.36,3.55,2.73,5.5,3.67V69.38L21.6,55.46l9.9-5.32 c-0.41-0.7-0.65-1.52-0.65-2.39h-0.01v0V28.86l0,0h0.01c0-1.32,0.53-2.51,1.38-3.36c0.15-0.15,0.31-0.28,0.47-0.4 C33.49,24.5,34.49,24.14,35.58,24.13l0-0.02h0V24.13L35.58,24.13z M38.36,104.59h0.04c4.05,0.06,7.27-2.42,10.39-4.83 c3.9-3.01,7.68-5.93,13.34-5.86c5.03,0.05,7.94,2.81,11.13,5.84c2.83,2.69,5.98,5.67,11.46,5.39c0.07,0,0.13,0,0.2,0 c0.07,0,0.13,0,0.2,0c5.47,0.29,8.62-2.7,11.46-5.39c3.19-3.02,6.1-5.78,11.13-5.84c5.66-0.06,7.49,2.85,11.39,5.86 c0.63,0.49,1.28,0.99,2.15,1.62l0,0l0.09,0.07c1.67,1.2,2.05,3.54,0.85,5.21c-1.21,1.67-3.54,2.05-5.21,0.85l-0.1-0.07l-0.01-0.01 l-0.01,0.01c-0.65-0.47-1.49-1.12-2.32-1.76c-2.86-2.21-3.68-4.34-6.77-4.31c-2.06,0.02-3.96,1.82-6.03,3.79 c-3.91,3.71-8.26,7.83-16.81,7.44c-8.54,0.39-12.89-3.73-16.81-7.44c-2.08-1.97-3.97-3.76-6.03-3.79 c-3.08-0.03-5.86,2.11-8.72,4.31c-4.12,3.18-8.38,6.46-15,6.38c-6.62,0.08-10.88-3.2-15-6.38c-2.86-2.21-5.63-4.34-8.72-4.31 c-2.06,0.02-3.96,1.82-6.03,3.79c-0.77,0.73-1.56,1.48-2.44,2.23c-1.57,1.34-3.93,1.16-5.27-0.41c-1.34-1.57-1.16-3.93,0.41-5.27 c0.72-0.62,1.44-1.3,2.15-1.97c3.19-3.02,6.1-5.78,11.13-5.84c5.66-0.06,9.44,2.85,13.34,5.86c3.12,2.4,6.34,4.89,10.39,4.83H38.36 L38.36,104.59z M41.08,44.99L61,34.28l22.05,10.71h1.12V31.6h-4.27c-0.11,0.01-0.22,0.01-0.34,0.01c-2.07,0-3.75-1.68-3.75-3.75 v-3.9h-7.38c-2.07,0-3.75-1.68-3.75-3.75V7.5h-6.88v12.72c0,2.07-1.68,3.75-3.75,3.75h-7.38v3.9h-0.01c0,2.06-1.67,3.73-3.73,3.73 h-4.6v13.39H41.08L41.08,44.99z" />
    </svg>
  );
}


