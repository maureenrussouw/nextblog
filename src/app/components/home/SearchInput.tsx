'use client';
import { useState } from 'react';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center border border-border rounded-x overflow-hidden p-1">
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 bg-transparent outline-none text-sm text-text placeholder-gray-500"
        />
        <button className="px-5 py-2.5 bg-primary text-white text-sm font-medium hover:opacity-90 transition rounded-lg cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
}
