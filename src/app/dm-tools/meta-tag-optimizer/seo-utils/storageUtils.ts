const STORAGE_KEY = 'meta-tag-recent'

export function saveToLocal(title: string, description: string, keyword: string) {
  if (typeof window === 'undefined') return

  const record = { title, description, keyword, timestamp: Date.now() }
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  const updated = [record, ...existing.filter((r: any) => r.title !== title)].slice(0, 5)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

export function getRecentInputs(): Array<{ title: string; description: string; keyword: string }> {
  if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}
