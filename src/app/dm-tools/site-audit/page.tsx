'use client';

import { useState } from 'react';
import AuditInput from './componentss/AuditInput';  // Import the URL input form component
import AuditResult from './componentss/AuditResult';  // Import the component to display results

export default function SeoAuditPage() {
  const [auditResult, setAuditResult] = useState(null);
  const [loading, setLoading] = useState(false);  // New state for loading indicator

  // Handle URL submission and call the backend API for SEO audit
  const handleUrlSubmit = async (url: string) => {
    setLoading(true);  // Set loading state to true

    try {
      // Make the POST request to the API
      const response = await fetch('/api/check-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('API Response:', result);  // Log the result for debugging
        setAuditResult(result);  // Store the result for display
      } else {
        console.error('API error:', response.status);
        alert('Error fetching the audit results');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong with the request');
    } finally {
      setLoading(false);  // Reset loading state after the API call
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">SEO Site Audit Tool</h1>

      {/* URL Input Form */}
      <AuditInput onSubmit={handleUrlSubmit} />

      {/* Loading indicator */}
      {loading && <div className="text-center text-lg font-semibold">Loading...</div>}

      {/* Display the audit result if available */}
      {auditResult && <AuditResult result={auditResult} />}
    </div>
  );
}
