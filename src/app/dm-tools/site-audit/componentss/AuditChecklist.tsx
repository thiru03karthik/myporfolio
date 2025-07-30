'use client';

export default function AuditChecklist({ checks }: { checks: any }) {
  return (
    <div className="space-y-6">
      {/* SEO Results */}
      <div>
        <h3 className="font-semibold">SEO Results</h3>
        <ul className="space-y-2">
          <li><strong>Title:</strong> {checks.titleTag}</li>
          <li><strong>Meta Description:</strong> {checks.metaDescription}</li>
          <li><strong>H1 Tag:</strong> {checks.h1Tag}</li>
        </ul>
      </div>

      {/* Performance Results */}
      <div>
        <h3 className="font-semibold">Performance Results</h3>
        <ul className="space-y-2">
          <li><strong>Performance Score:</strong> {checks.performanceScore}</li>
        </ul>
      </div>
    </div>
  );
}
