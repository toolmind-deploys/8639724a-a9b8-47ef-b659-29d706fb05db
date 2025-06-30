import React from 'react';

export default async function FeedsPage() {
  console.log("[FeedsPage] Rendering feeds page...");
  const res = await fetch('http://localhost:3000/api/feeds', { cache: 'no-store' });
  if (!res.ok) {
    console.error('[FeedsPage] Failed to fetch feeds:', res.statusText);
    // In a real app, consider using an Error Boundary or displaying a toast.
  }
  const feeds = await res.json();
  console.log('[FeedsPage] Fetched feeds:', feeds);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Feeds</h1>
      {Array.isArray(feeds) && feeds.length > 0 ? (
        feeds.map((feed: any) => (
          <div key={feed.id} className="mb-4 p-4 border rounded-md">
            <h2 className="font-semibold">{feed.title}</h2>
            <p>Status: {feed.status}</p>
            <p>Company: {feed.company}</p>
            <p className="mt-2 text-sm">{feed.description}</p>
          </div>
        ))
      ) : (
        <p>There are no feeds available.</p>
      )}
    </div>
  );
}
