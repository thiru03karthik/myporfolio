import { Suspense } from 'react'
import MetaTagOptimizerPage from './MetaTagOptimizerPage'

export default function Wrapper() {
  return (
    <Suspense fallback={<div className="text-sm text-gray-500 dark:text-gray-400">Loading SEO Optimizer...</div>}>
      <MetaTagOptimizerPage />
    </Suspense>
  )
}
