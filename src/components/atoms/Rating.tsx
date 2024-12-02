import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  reviews?: number;
}

export const Rating: React.FC<RatingProps> = ({ value, reviews }) => (
  <div className="flex items-center bg-green-100 px-2 py-1 rounded">
    <span className="text-green-700 font-bold mr-1">{value}</span>
    <Star className="w-4 h-4 text-green-700 fill-current" />
    {reviews && <span className="text-sm text-gray-600 ml-1">({reviews})</span>}
  </div>
);
