// src/app/dm-tools/site-audit/componentss/AuditResult.tsx
'use client';  // Mark this component as a client component

import AuditChecklist from './AuditChecklist';  // Import the checklist component from the same folder

export default function AuditResult({ result }: { result: any }) {
  // Check if result is available and contains the necessary data
  if (!result) {
    return <div>No audit result available.</div>;
  }

  const { technicalSeo, onPageSeo, performance, analytics } = result;

  return (
    <div className="p-4 mt-8">
      <h2 className="text-2xl font-semibold mb-4">SEO Audit Results</h2>

      {/* Display the checklist */}
      <AuditChecklist checks={result} />
    </div>
  );
}
