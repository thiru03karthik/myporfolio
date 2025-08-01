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
    <div className="space-y-6">
      <div>
        <label className="font-semibold">Page Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          maxLength={100}
          placeholder="Enter SEO title..."
        />
        <p className="text-sm text-gray-500">{title.length}/60 characters</p>
      </div>

      <div>
        <label className="font-semibold">Meta Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          maxLength={260}
          placeholder="Enter meta description..."
        />
        <p className="text-sm text-gray-500">{description.length}/160 characters</p>
      </div>

      <div>
        <label className="font-semibold">Focus Keyword</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          placeholder="Enter focus keyword..."
        />
      </div>
    </div>
  )
}
