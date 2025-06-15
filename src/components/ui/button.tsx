import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary';
}

/**
 * Reusable Button component with two variants: default and primary.
 * It applies Tailwind styling for a pill-shaped button.
 */
export const Button: React.FC<ButtonProps> = ({ variant = 'default', className = '', children, ...props }) => {
  // Base styles for all buttons
  const baseClasses = 'inline-block rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  // Variant-specific styles
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400';

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};
