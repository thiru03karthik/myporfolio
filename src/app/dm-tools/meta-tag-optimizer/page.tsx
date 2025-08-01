'use client'

import { useState } from 'react'
import MetaInputForm from './meta-components/MetaInputForm'
import SERPPreview from './meta-components/SERPPreview'
import Suggestions from './meta-components/Suggestions'
import ScoreCard from './meta-components/ScoreCard'
import { checkSEO } from './seo-utils/seoUtils'

export default function MetaTagOptimizerPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [keyword, setKeyword] = useState('')

  const { score } = checkSEO(title, description, keyword)

  return (
    <main className="min-h-screen bg-[#f9f9f9] px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <section>
          <h1 className="text-2xl font-bold mb-6">SEO Meta Tag Optimizer 🔍</h1>
          <MetaInputForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        </section>

        <section>
          <SERPPreview title={title} description={description} />
          <Suggestions title={title} description={description} keyword={keyword} />
          <ScoreCard score={score} title={title} description={description} />
        </section>
      </div>
    </main>
  )
}
