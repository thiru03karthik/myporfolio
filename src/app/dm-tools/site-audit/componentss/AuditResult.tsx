'use client';

import AuditChecklist from './AuditChecklist';  // To display the checklist

export default function AuditResult({ result }: { result: any }) {
  return (
    <div className="p-4 mt-8">
      <h2 className="text-2xl font-semibold mb-4">SEO Audit Results</h2>
      <AuditChecklist checks={result} />
    </div>
  );
}
