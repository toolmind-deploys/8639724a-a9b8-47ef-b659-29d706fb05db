import { NextRequest, NextResponse } from 'next/server';

// This route serves placeholder pig data as there is no database.
export async function GET(req: NextRequest) {
  console.log('Fetching placeholder pig data');

  // Placeholder array of pig objects
  const pigs = [
    {
      id: 1,
      name: 'Porky',
      breed: 'Large White',
      age: 2,
      status: 'Happy',
    },
    {
      id: 2,
      name: 'Babe',
      breed: 'Yorkshire',
      age: 1,
      status: 'Content',
    },
  ];

  return NextResponse.json(pigs);
}
