import { checkSEO } from '../seo-utils/seoUtils'

export default function Suggestions({
  title,
  description,
  keyword
}: {
  title: string
  description: string
  keyword: string
}) {
  const { tips } = checkSEO(title, description, keyword)

  return (
    <div className="mt-6 space-y-2">
      <h2 className="text-lg font-semibold">Suggestions</h2>
      {tips.map((item, index) => (
        <div
          key={index}
          className={`p-2 rounded ${
            item.status === 'good'
              ? 'bg-green-100 text-green-700'
              : item.status === 'warn'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {item.message}
        </div>
      ))}
    </div>
  )
}
