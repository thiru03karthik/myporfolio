'use client';

import { useEffect, useState } from 'react';

export default function Loader({ progress }: { progress: number }) {
  const [loadingText, setLoadingText] = useState('Starting Audit...');

  // Update the text dynamically based on progress
  useEffect(() => {
    if (progress < 30) {
      setLoadingText('Audit in Progress...');
    } else if (progress < 60) {
      setLoadingText('Checking SEO Factors...');
    } else if (progress < 90) {
      setLoadingText('Performance and Accessibility...');
    } else if (progress === 100) {
      setLoadingText('Audit Complete!');
    }
  }, [progress]);

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-64">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600">
                {loadingText}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600">
                {progress}%
              </span>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="relative flex mb-2 items-center justify-between">
              <div className="flex-grow">
                <div className="flex mb-2 items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-teal-600 h-2.5 rounded-full"
                      style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
