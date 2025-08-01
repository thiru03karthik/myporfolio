export function checkSEO(title: string, description: string, keyword: string) {
  const tips: {
    message: string
    status: 'good' | 'warn' | 'error'
    field: 'title' | 'description' | 'keyword' | 'global'
  }[] = []

  let score = 100

  // Title check
  if (!title) {
    tips.push({ message: 'Title is empty.', status: 'error', field: 'title' })
    score -= 25
  } else {
    if (title.length > 60) {
      tips.push({ message: 'Title is too long.', status: 'error', field: 'title' })
      score -= 10
    } else {
      tips.push({ message: 'Title is optimized.', status: 'good', field: 'title' })
    }
  }

  // Description check
  if (!description) {
    tips.push({ message: 'Description is empty.', status: 'error', field: 'description' })
    score -= 25
  } else {
    if (description.length > 160) {
      tips.push({ message: 'Description is too long.', status: 'error', field: 'description' })
      score -= 10
    } else {
      tips.push({ message: 'Description is optimized.', status: 'good', field: 'description' })
    }
  }

  // Keywords check
  if (!keyword.trim()) {
    tips.push({ message: 'Meta keywords are empty.', status: 'warn', field: 'keyword' })
    score -= 10
  }

  return { tips, score: Math.max(score, 0) }
}

// ✅ Add this function to fix your error in ScoreCard.tsx
export function generateHTMLSnippet(title: string, description: string, keyword: string) {
  return `
<title>${title}</title>
<meta name="description" content="${description}" />
<meta name="keywords" content="${keyword}" />
`.trim()
}
