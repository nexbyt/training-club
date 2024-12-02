import React from 'react';
import { Collection } from '../../types';

interface CollectionCardProps {
  collection: Collection;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => (
  <div className="relative rounded-lg overflow-hidden group cursor-pointer">
    <img 
      src={collection.imageUrl} 
      alt={collection.title}
      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
      <h3 className="font-bold text-lg">{collection.title}</h3>
      <p className="text-sm">{collection.count}</p>
    </div>
  </div>
);
