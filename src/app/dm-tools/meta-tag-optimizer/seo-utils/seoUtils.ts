export function checkSEO(title: string, description: string, keyword: string) {
  const tips: { message: string; status: 'good' | 'warn' | 'error' }[] = []
  let score = 100

  const keywordLower = keyword.toLowerCase()

  if (!title) {
    tips.push({ message: 'Title is empty.', status: 'error' })
    score -= 25
  } else {
    if (title.length > 60) {
      tips.push({ message: 'Title is too long.', status: 'error' })
      score -= 10
    }
    if (!title.toLowerCase().includes(keywordLower)) {
      tips.push({ message: 'Keyword missing in title.', status: 'warn' })
      score -= 10
    } else {
      tips.push({ message: 'Title is optimized.', status: 'good' })
    }
  }

  if (!description) {
    tips.push({ message: 'Description is empty.', status: 'error' })
    score -= 25
  } else {
    if (description.length > 160) {
      tips.push({ message: 'Description is too long.', status: 'error' })
      score -= 10
    }
    if (!description.toLowerCase().includes(keywordLower)) {
      tips.push({ message: 'Keyword missing in description.', status: 'warn' })
      score -= 10
    } else {
      tips.push({ message: 'Description is optimized.', status: 'good' })
    }
  }

  if (!keyword.trim()) {
    tips.push({ message: 'Focus keyword is empty.', status: 'error' })
    score -= 20
  }

  return { tips, score: Math.max(score, 0) }
}

export function generateHTMLSnippet(title: string, description: string) {
  return `<title>${title}</title>\n<meta name="description" content="${description}" />`
}
