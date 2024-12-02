import React from 'react';
import { BadgeVariant } from '../../types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const variants: Record<BadgeVariant, string> = {
    default: "bg-gray-100 text-gray-600",
    success: "bg-green-100 text-green-700",
    pro: "bg-white text-gray-900"
  };

  return (
    <span className={`${variants[variant]} text-sm px-2 py-1 rounded`}>
      {children}
    </span>
  );
};
