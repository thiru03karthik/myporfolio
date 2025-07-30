'use client';

import { useState, useEffect } from 'react';
import AuditInput from './componentss/AuditInput';  // Import the URL input form component
import AuditResult from './componentss/AuditResult';  // Import the component to display results
import Loader from './componentss/Loader';  // Import the loader component

export default function SeoAuditPage() {
  const [auditResult, setAuditResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);  // Track progress
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);  // Store the interval ID to clear it later

  // Handle URL submission and call the backend API to run the SEO audit
  const handleUrlSubmit = async (url: string) => {
    setLoading(true);
    setProgress(0);  // Reset progress when a new audit starts

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 5;
        } else {
          clearInterval(interval);  // Stop the progress simulation when it reaches 100
          return 100;
        }
      });
    }, 500);

    setIntervalId(interval);

    const response = await fetch('/api/check-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    const result = await response.json();
    setAuditResult(result);  // Store the result for display
    setLoading(false);
  };

  useEffect(() => {
    // Cleanup interval on component unmount or audit completion
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">SEO Site Audit Tool</h1>
      <AuditInput onSubmit={handleUrlSubmit} />
      {loading && <Loader progress={progress} />}
      {auditResult && <AuditResult result={auditResult} />}
    </div>
  );
}
