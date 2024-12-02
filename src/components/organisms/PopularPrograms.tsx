import React from 'react';
import { Filter } from 'lucide-react';
import { ProgramCard } from '../molecules/ProgramCard';
import { Program } from '../../types';

interface PopularProgramsProps {
  programs: Program[];
}

export const PopularPrograms: React.FC<PopularProgramsProps> = ({ programs }) => (
  <section>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Popular Programs</h2>
      <button className="flex items-center text-gray-600 hover:text-gray-900">
        <Filter className="w-4 h-4 mr-2" />
        Filters
      </button>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6">
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  </section>
);
