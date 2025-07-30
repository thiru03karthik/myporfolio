'use client';

import { useState } from 'react';

export default function AuditInput({ onSubmit }: { onSubmit: (url: string) => void }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Prevent the default form submission
    if (url) {
      onSubmit(url);  // Trigger SEO audit with the entered URL
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">Enter a domain or URL</label>
          <input
            type="url"
            id="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}  // Update state as user types
            className="mt-2 p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"  // Button triggers form submission
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Submit & Audit
          </button>
        </div>
      </form>
    </div>
  );
}
