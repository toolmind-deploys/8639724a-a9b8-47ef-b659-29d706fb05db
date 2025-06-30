import React from 'react';

// This is a Next.js server component by default
// We fetch the pig data from the /api/pig endpoint
export default async function PigPage() {
  console.log('Rendering PigPage component');

  const res = await fetch('http://localhost:3000/api/pig', {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch pig data');
    throw new Error('Failed to fetch pig data');
  }

  // The placeholder response from the API route is an array of pig objects
  const pigData = await res.json();
  console.log('Received pig data:', pigData);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pig Page</h1>
      {pigData.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pigData.map((pig: any) => (
            <li key={pig.id} className="border rounded p-4">
              <h2 className="text-xl font-semibold mb-1">{pig.name}</h2>
              <p className="text-sm mb-1">Breed: {pig.breed}</p>
              <p className="text-sm mb-1">Age: {pig.age}</p>
              <p className="text-sm">Status: {pig.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pig data available.</p>
      )}
    </main>
  );
}
