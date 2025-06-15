import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Reusable Input component for text inputs.
 * Applies Tailwind styling for borders, padding, and focus states.
 */
export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  const baseClasses = 'block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900';
  const focusClasses = 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  return (
    <input className={`${baseClasses} ${focusClasses} ${className}`} {...props} />
  );
};
