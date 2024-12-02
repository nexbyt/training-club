import React from 'react';
import { Hero } from '../components/organisms/Hero';
import { Collections } from '../components/organisms/Collections';
import { PopularPrograms } from '../components/organisms/PopularPrograms';
import { Collection, Program } from '../types';

interface HomeTemplateProps {
  collections: Collection[];
  popularPrograms: Program[];
  onLocationClick: () => void;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({ 
  collections, 
  popularPrograms, 
  onLocationClick 
}) => (
  <div className="min-h-screen bg-gray-50">
    <Hero onLocationClick={onLocationClick} />
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Collections collections={collections} />
      <PopularPrograms programs={popularPrograms} />
    </div>
  </div>
);
