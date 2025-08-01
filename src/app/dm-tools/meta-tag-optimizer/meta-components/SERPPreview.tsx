import { useState } from 'react'

export default function SERPPreview({
  title,
  description
}: {
  title: string
  description: string
}) {
  const [url, setUrl] = useState('https://www.example.com')

  return (
    <div className="space-y-1 text-left">
      <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400">
        SERP Preview URL
      </label>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full mb-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-800 dark:text-zinc-100"
      />
      <p className="text-xs text-green-600 dark:text-green-400">{url}</p>
      <h3 className="text-base font-semibold text-blue-700 dark:text-blue-400">
        {title || 'Your SEO Title Here'}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        {description || 'Meta description preview will appear here.'}
      </p>
    </div>
  )
}
