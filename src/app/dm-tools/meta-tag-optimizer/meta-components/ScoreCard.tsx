import { generateHTMLSnippet } from '../seo-utils/seoUtils'

export default function ScoreCard({
  score,
  title,
  description
}: {
  score: number
  title: string
  description: string
}) {
  const emoji =
    score >= 90 ? '🔥' : score >= 70 ? '👍' : score >= 50 ? '⚠️' : '❌'

  const snippet = generateHTMLSnippet(title, description)

  return (
    <div className="mt-6 bg-white border rounded-lg shadow-sm p-4 space-y-3">
      <h3 className="text-lg font-semibold">Optimization Score</h3>

      <div className="flex items-center space-x-2">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className={`h-4 rounded-full ${
              score >= 90
                ? 'bg-green-500'
                : score >= 70
                ? 'bg-yellow-400'
                : score >= 50
                ? 'bg-orange-400'
                : 'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          ></div>
        </div>
        <span className="font-bold">{score}/100 {emoji}</span>
      </div>

      <div>
        <h4 className="text-sm font-medium mt-2">Export as HTML</h4>
        <textarea
          className="w-full border rounded p-2 text-sm font-mono bg-gray-100"
          value={snippet}
          readOnly
          rows={3}
        />
      </div>
    </div>
  )
}
