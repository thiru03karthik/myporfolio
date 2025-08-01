'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Card } from '@/components/Card'
import MetaInputForm from './meta-components/MetaInputForm'
import SERPPreview from './meta-components/SERPPreview'
import Suggestions from './meta-components/Suggestions'
import ScoreCard from './meta-components/ScoreCard'
import { checkSEO } from './seo-utils/seoUtils'
import { saveToLocal } from './seo-utils/storageUtils'

export default function MetaTagOptimizerPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    const t = searchParams.get('title') || ''
    const d = searchParams.get('description') || ''
    const k = searchParams.get('keyword') || ''
    setTitle(decodeURIComponent(t))
    setDescription(decodeURIComponent(d))
    setKeyword(decodeURIComponent(k))
  }, [searchParams])

  useEffect(() => {
    const q = new URLSearchParams({ title, description, keyword }).toString()
    router.replace(`/dm-tools/meta-tag-optimizer?${q}`, { scroll: false })
    if (title && description && keyword) {
      saveToLocal(title, description, keyword)
    }
  }, [title, description, keyword, router])

  const { score } = checkSEO(title, description, keyword)

  return (
    <SimpleLayout
      title="SEO Meta Tag Optimizer"
      intro="Improve your page’s search presence with real-time feedback. Enter your page title, description, and target keyword to preview how it looks on Google and get actionable suggestions."
    >
      <div className="space-y-8">
        <Card>
          <MetaInputForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        </Card>
        <Card>
          <SERPPreview title={title} description={description} />
        </Card>
        <Card>
          <Suggestions title={title} description={description} keyword={keyword} />
          <ScoreCard score={score} title={title} description={description} />
        </Card>
      </div>
    </SimpleLayout>
  )
}
