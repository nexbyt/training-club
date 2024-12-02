import React from 'react';
import { CollectionCard } from '../molecules/CollectionCard';
import { Collection } from '../../types';

interface CollectionsProps {
  collections: Collection[];
}

export const Collections: React.FC<CollectionsProps> = ({ collections }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6">Collections</h2>
    <div className="grid md:grid-cols-4 gap-6">
      {collections.map((collection, index) => (
        <CollectionCard key={index} collection={collection} />
      ))}
    </div>
  </section>
);
