import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}


// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'

// interface Article {
//   title: string
//   description: string
//   author: string
//   date: string
// }

// export interface ArticleWithSlug extends Article {
//   slug: string
// }

// // ✅ Reads MDX files at build time for static export
// export function getAllArticles(): ArticleWithSlug[] {
//   const articlesDirectory = path.join(process.cwd(), 'src/app/articles') // Adjust path if needed
//   const filenames = fs.readdirSync(articlesDirectory).filter((file) => file.endsWith('.mdx'));

//   const articles = filenames.map((filename) => {
//     const filePath = path.join(articlesDirectory, filename)
//     const fileContents = fs.readFileSync(filePath, 'utf-8')
//     const { data } = matter(fileContents) // Extract frontmatter metadata

//     return {
//       slug: filename.replace(/(\/page)?\.mdx$/, ''), // Remove .mdx extension
//       title: data.title,
//       description: data.description,
//       author: data.author,
//       date: data.date,
//     }
//   });

//   return articles.length > 0 ? articles.sort((a, z) => +new Date(z.date) - +new Date(a.date)) : []
// }
