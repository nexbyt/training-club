import React from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { Input } from '../atoms/Input';

interface SearchBarProps {
  onLocationClick: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onLocationClick }) => (
  <div className="bg-white rounded-lg shadow-lg flex">
    <button 
      className="flex items-center px-4 py-3 text-gray-700 border-r border-gray-300"
      onClick={onLocationClick}
    >
      <MapPin className="w-5 h-5 mr-2 text-red-500" />
      <span className="mr-2">Select Location</span>
      <ChevronDown className="w-4 h-4" />
    </button>
    <Input 
      icon={Search}
      placeholder="Search for programs, age groups, or locations"
    />
  </div>
);
