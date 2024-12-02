import React from 'react';
import { MapPin } from 'lucide-react';
import { Badge } from '../atoms/Badge';
import { Rating } from '../atoms/Rating';
import { Button } from '../atoms/Button';
import { Program } from '../../types';

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative">
      <img 
        src={program.imageUrl} 
        alt={program.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4">
        <Badge variant="pro">Pro Coach</Badge>
      </div>
    </div>
    
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{program.title}</h3>
        <Rating value={program.rating} reviews={program.reviews} />
      </div>
      
      <div className="flex items-center text-gray-500 text-sm mb-3">
        <MapPin className="w-4 h-4 mr-1" />
        {program.location}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {program.tags.map((tag, index) => (
          <Badge key={index}>{tag}</Badge>
        ))}
      </div>
      
      <div className="flex justify-between items-center pt-3 border-t">
        <span className="font-bold text-gray-900">{program.price}</span>
        <Button>Book Now</Button>
      </div>
    </div>
  </div>
);
