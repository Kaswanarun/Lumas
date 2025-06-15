import React from 'react';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CardContent provides standard padding inside a Card.
 * It can be used to wrap text or other elements within a Card.
 */
export const CardContent: React.FC<CardContentProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
