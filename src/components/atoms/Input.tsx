import React, { InputHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
}

export const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => (
  <div className="flex items-center px-4">
    {Icon && <Icon className="w-5 h-5 text-gray-400" />}
    <input 
      className="w-full px-4 py-3 focus:outline-none"
      {...props}
    />
  </div>
);
