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
  return (
    <div className="space-y-6 w-full">
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Page Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white"
          placeholder="Enter SEO title..."
          maxLength={60}
        />
        <p className="mt-1 text-xs text-zinc-500">{title.length}/60 characters</p>
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Meta Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mt-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white"
          rows={3}
          placeholder="Enter meta description..."
          maxLength={160}
        />
        <p className="mt-1 text-xs text-zinc-500">{description.length}/160 characters</p>
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Focus Keyword
        </label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full mt-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white"
          placeholder="Enter focus keyword..."
        />
      </div>
    </div>
  )
}
