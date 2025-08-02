// import { NextApiRequest, NextApiResponse } from 'next'
// import OpenAI from 'openai'

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// })

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Only POST requests are allowed' })
//   }

//   const { keyword } = req.body

//   if (!keyword || typeof keyword !== 'string') {
//     return res.status(400).json({ error: 'Keyword is required in request body.' })
//   }

//   try {
//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo-0125',
//       messages: [
//         {
//           role: 'system',
//           content: 'You are an expert SEO assistant. Generate a compelling SEO title and meta description based on the given keyword.'
//         },
//         {
//           role: 'user',
//           content: `Generate an SEO-optimized title and meta description for this keyword: "${keyword}". Format it as:
// Title: ...
// Description: ...`
//         }
//       ],
//       temperature: 0.7,
//       max_tokens: 100
//     })

//     const aiMessage = response.choices[0].message.content || ''
//     const titleMatch = aiMessage.match(/Title:\s*(.*)/)
//     const descriptionMatch = aiMessage.match(/Description:\s*(.*)/)

//     const title = titleMatch ? titleMatch[1] : ''
//     const description = descriptionMatch ? descriptionMatch[1] : ''

//     return res.status(200).json({ title, description })
//   } catch (err: any) {
//     console.error('OpenAI API error:', err)
//     return res.status(500).json({ error: err.message || 'Something went wrong.' })
//   }
// }
