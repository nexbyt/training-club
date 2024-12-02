import React from 'react';
import { SearchBar } from '../molecules/SearchBar';

interface HeroProps {
  onLocationClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLocationClick }) => (
  <div className="relative h-96 bg-black">
    <img 
      src="/api/placeholder/1920/600" 
      alt="Tennis court"
      className="w-full h-full object-cover opacity-60"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-8">Tennis Academy</h1>
      <div className="w-full max-w-4xl px-4">
        <SearchBar onLocationClick={onLocationClick} />
      </div>
    </div>
  </div>
);
