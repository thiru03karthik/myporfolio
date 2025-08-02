'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Card } from '@/components/Card'
import MetaInputForm from './meta-components/MetaInputForm'
import { checkSEO } from './seo-utils/seoUtils'
import { saveToLocal } from './seo-utils/storageUtils'

export default function MetaTagOptimizerPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [keyword, setKeyword] = useState('')

  // ✅ Safe usage of useSearchParams inside useEffect
  useEffect(() => {
    if (!searchParams) return

    const t = searchParams.get('title')
    const d = searchParams.get('description')
    const k = searchParams.get('keyword')

    setTitle(t ? decodeURIComponent(t) : '')
    setDescription(d ? decodeURIComponent(d) : '')
    setKeyword(k ? decodeURIComponent(k) : '')
  }, [searchParams])

  useEffect(() => {
    const q = new URLSearchParams({ title, description, keyword }).toString()
    router.replace(`/dm-tools/meta-tag-optimizer?${q}`, { scroll: false })

    if (typeof window !== 'undefined' && title && description && keyword) {
      saveToLocal(title, description, keyword)
    }
  }, [title, description, keyword, router])

  return (
    <SimpleLayout
      title="SEO Meta Tag Optimizer"
      intro="Get instant feedback on your SEO title, description, and keywords. Optimize how your page appears in search results."
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
      </div>
    </SimpleLayout>
  )
}
