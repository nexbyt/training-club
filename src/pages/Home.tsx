import React, { useState } from 'react';
import { HomeTemplate } from '../templates/HomeTemplate';
import { Collection, Program } from '../types';

const mockCollections: Collection[] = [
  {
    title: "Kids Programs",
    count: "8 Courses",
    imageUrl: "/api/placeholder/300/200"
  },
  // Add more mock collections...
];

const mockPrograms: Program[] = [
  {
    id: 1,
    title: "Kids Beginner Program",
    imageUrl: "/api/placeholder/400/300",
    rating: 4.8,
    reviews: 234,
    price: "From $199/month",
    location: "Main Tennis Center",
    tags: ["Ages 4-8", "Beginner Friendly", "Weekend Batches"]
  },
  // Add more mock programs...
];

const Home: React.FC = () => {
  const [locationOpen, setLocationOpen] = useState(false);

  return (
    <HomeTemplate 
      collections={mockCollections}
      popularPrograms={mockPrograms}
      onLocationClick={() => setLocationOpen(!locationOpen)}
    />
  );
};

export default Home;
