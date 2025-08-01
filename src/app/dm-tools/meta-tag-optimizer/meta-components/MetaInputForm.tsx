import { checkSEO, generateHTMLSnippet } from '../seo-utils/seoUtils'

interface Props {
  title: string
  setTitle: (val: string) => void
  description: string
  setDescription: (val: string) => void
  keyword: string
  setKeyword: (val: string) => void
}

export default function MetaInputForm({
  title,
  setTitle,
  description,
  setDescription,
  keyword,
  setKeyword
}: Props) {
  const { tips, score } = checkSEO(title, description, keyword)
  const snippet = generateHTMLSnippet(title, description, keyword)

  const renderTip = (field: 'title' | 'description' | 'keyword') => {
    const matched = tips.find(t => t.field === field)
    if (!matched) return null

    return (
      <p
        className={`mt-1 text-xs ${
          matched.status === 'good'
            ? 'text-green-600 dark:text-green-400'
            : matched.status === 'warn'
            ? 'text-yellow-600 dark:text-yellow-400'
            : 'text-red-600 dark:text-red-400'
        }`}
      >
        {matched.message}
      </p>
    )
  }

  const emoji = score >= 90 ? '🔥' : score >= 70 ? '👍' : score >= 50 ? '⚠️' : '❌'

  return (
    <div className="space-y-6 w-full">
      {/* Page Title Input */}
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Page Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white"
          maxLength={100}
          placeholder="Enter your SEO title..."
        />
        <p className="mt-1 text-xs text-zinc-500">{title.length}/60 characters</p>
        {renderTip('title')}
      </div>

      {/* Meta Description Input */}
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Meta Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mt-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white"
          rows={3}
          maxLength={500}
          placeholder="Enter your meta description..."
        />
        <p className="mt-1 text-xs text-zinc-500">{description.length}/160 characters</p>
        {renderTip('description')}
      </div>

      {/* Meta Keywords Input */}
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Meta Keywords</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full mt-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white"
          placeholder="Enter comma-separated meta keywords"
        />
        <p className="mt-1 text-xs text-zinc-500">
          {keyword.split(',').filter(k => k.trim()).length} keywords
        </p>
        {renderTip('keyword')}
      </div>

      {/* Score + HTML Snippet Section */}
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
          className="w-full mt-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white font-mono"
          rows={6}
          readOnly
          value={snippet}
        />
      </div>
    </div>
  )
}
