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
  const snippet = generateHTMLSnippet(title, description)
  const emoji = score >= 90 ? '🔥' : score >= 70 ? '👍' : score >= 50 ? '⚠️' : '❌'

  return (
    <div className="mt-6">
      <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Optimization Score</h2>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-3 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${
              score >= 90
                ? 'bg-green-500'
                : score >= 70
                ? 'bg-yellow-400'
                : score >= 50
                ? 'bg-orange-400'
                : 'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
        <span className="text-sm font-bold text-zinc-800 dark:text-zinc-100">
          {score}/100 {emoji}
        </span>
      </div>
      <label className="text-xs text-zinc-500 dark:text-zinc-400">Export as HTML snippet</label>
      <textarea
        className="w-full mt-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-xs font-mono text-zinc-700 dark:text-zinc-200"
        rows={3}
        readOnly
        value={snippet}
      />
    </div>
  )
}
