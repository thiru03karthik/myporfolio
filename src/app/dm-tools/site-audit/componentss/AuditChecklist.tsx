// src/app/dm-tools/site-audit/components/AuditChecklist.tsx
export default function AuditChecklist({ checks }: { checks: any }) {
  const { technicalSeo, onPageSeo, performance, analytics } = checks;

  const renderCheck = (label: string, passed: boolean, recommendation: string) => {
    return (
      <li className="flex items-center space-x-2">
        <span className={passed ? 'text-green-500' : 'text-red-500'}>
          {passed ? '✅' : '❌'}
        </span>
        <span className="text-sm">{label}</span>
        {!passed && <span className="text-sm text-gray-500">{recommendation}</span>}
      </li>
    );
  };

  return (
    <div className="p-4 mt-8">
      <h3 className="text-2xl font-semibold mb-4">SEO Audit Checklist</h3>

      <div className="space-y-6">
        {/* Technical SEO Section */}
        <div>
          <h4 className="font-semibold">Technical SEO</h4>
          <ul className="space-y-2">
            {renderCheck('HTTPS Security', technicalSeo.https, 'Ensure your website is using HTTPS for security')}
            {renderCheck('robots.txt', technicalSeo.robotsTxt, 'Make sure your site has a robots.txt file')}
          </ul>
        </div>

        {/* On-Page SEO Section */}
        <div>
          <h4 className="font-semibold">On-Page SEO</h4>
          <ul className="space-y-2">
            {renderCheck('Title Tag', Boolean(onPageSeo.title), 'Ensure your title tag is present and unique')}
          </ul>
        </div>

        {/* Performance Section */}
        <div>
          <h4 className="font-semibold">Performance</h4>
          <ul className="space-y-2">
            {renderCheck('Page Performance', performance.score >= 85, 'Improve performance by optimizing resources')}
          </ul>
        </div>

        {/* Analytics & SEO Tools Section */}
        <div>
          <h4 className="font-semibold">Analytics & SEO Tools</h4>
          <ul className="space-y-2">
            {renderCheck('Google Analytics', Boolean(analytics.googleAnalytics), 'Ensure Google Analytics is set up correctly')}
          </ul>
        </div>
      </div>
    </div>
  );
}
