export default function SERPPreview({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border p-4 rounded shadow-sm">
    <h1 className="text-2xl font-bold mb-6">Snippet-Preview 🔍</h1>
      <p className="text-sm text-green-700 mb-1">www.example.com</p>
      <h3 className="text-blue-700 text-lg font-semibold break-words">
        {title || 'Your SEO Title Here'}
      </h3>
      <p className="text-gray-700 break-words">
        {description || 'Your meta description goes here and will show in search results.'}
      </p>
    </div>
  )
}
